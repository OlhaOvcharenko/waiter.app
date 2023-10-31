import { useDispatch, useSelector } from "react-redux";
import { getTableById } from "../../../redux/tableRedux";
import { useParams } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import  { Col } from "react-bootstrap";
import { Stack } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getStatus } from "../../../redux/optiosStatusRedux";
import { useState } from "react";
import { requestUpdateTableForm } from "../../../redux/tableRedux";
import { useForm } from "react-hook-form";
import { Spinner } from "react-bootstrap";

const SingleTableForm = ({ action, actionText, ... props}) => {

    const navigate = useNavigate();
    const options = useSelector((state) => getStatus(state));

    const { register, handleSubmit: validate, formState: { errors } } = useForm();
    
    const [number, setNumber] = useState (props.number || '');
    const [status, setStatus] = useState (props.status|| '');
    const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount || 0);
    const [maxPeopleAmount, setMaxPeopleAmount] = useState(props.maxPeopleAmount || 10);
    const [bill, setBill] = useState(props.bill || 0);
    const [displayBill, setDisplayBill] = useState(false);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setTimeout(() => {
        setLoading(false); 
      },300); 
    }, []);

    useEffect(() => {
      
        if (status === options[0]) {
            setDisplayBill(true);
        }
    
    }, [options]);

    const handleSubmit = () => {
       action({ status, peopleAmount, maxPeopleAmount, bill, number});
       navigate('/');
    };

    const handlePeopleAmount = (e) => {
        const newValue = parseInt(e);

        if (isNaN(newValue)) {
            setPeopleAmount(0);
        } else if (newValue > maxPeopleAmount) {
            setPeopleAmount(maxPeopleAmount);
        } else {
            setPeopleAmount(newValue);
        }
    }
    
    const handleMaxPeople = (e) => {
        const maxValue = parseInt(e);
        
        if (isNaN(maxValue)) {
            setMaxPeopleAmount(0);
        } else {
            setMaxPeopleAmount(maxValue);
        }
    }

    const handleStatusChange = (selectedStatus) => {
        setDisplayBill(false);
        setStatus(selectedStatus);

        if (selectedStatus === options[1] ||  selectedStatus === options[2]) 
            setPeopleAmount(0);
        

        if (selectedStatus === options[0]) 
            setDisplayBill(true);
         
        setBill('0');
    }

   
    return(
        <div> 

            {loading && <Button variant="tuned-light">
                <Spinner animation="border" variant="primary" size="lg" />
                Loading ...
            </Button>}

            <h1 className="py-4">Table {number}</h1>
            <Form style={{ width: '50rem' }} onSubmit={validate(handleSubmit)} >

                <Form.Group as={Row} >

                    <Stack direction="horizontal" gap={2} className="mb-2">
                        <Form.Label ><b>Status:</b></Form.Label>
                        <Col sm={4} className="px-3" >
                        <Form.Select value={status} onChange={e => handleStatusChange(e.target.value)}>
                            <option></option>
                                {options.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                        </Form.Select>
                        </Col>
                    </Stack>

                    <Stack direction="horizontal" gap={3} className="mb-2" style={{ width: '15rem' }}>
                        <Form.Label><b>People:</b></Form.Label>
                        <Col xs={5} className="d-flex align-items-center">
                            <Form.Control className="form-control form-control-sm" 
                            {...register("peopleAmount",  { min: 0, max: 10 }, )}
                            value={peopleAmount} onChange={e => handlePeopleAmount(e.target.value)} />

                            <p className="mb-0 mr-1 px-1" style={{ fontSize: '15px' }}>/</p>
                            <Form.Control className="form-control form-control-sm" 
                            {...register("maxPeopleAmount",  { min: 0, max: 10 })}
                            value={maxPeopleAmount} onChange={e => handleMaxPeople(e.target.value)}/>
                        </Col>
                    </Stack>

                    { (errors.peopleAmount || errors.maxPeopleAmount) && <small className="form-text text-danger mb-2">Max people 10, min 0</small>}
                
                    { displayBill && <Stack direction="horizontal" gap={3}>
                        <Form.Label className="pt-1"><b>Bill:</b></Form.Label>
                        <Col xs={1} className="d-flex align-items-center mx-4 px-2" >
                            <p className="mb-0 mr-1 px-1" style={{ fontSize: '15px' }}>$</p>
                            <Form.Control className="form-control form-control-sm" value={bill} onChange={e => setBill(e.target.value)} />
                        </Col>
                    </Stack>}

                </Form.Group>
                <Button type="submit" variant="primary" className="mx-1 mt-5">{actionText}</Button>
            </Form>
       
        </div>
    );

}

export default SingleTableForm;