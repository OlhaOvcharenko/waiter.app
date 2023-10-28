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
import { getAllTables } from "../../../redux/tableRedux";

const SingleTable = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { tableId } = useParams();

    const table = useSelector((state) => getTableById(state, tableId));
    console.log(table, 'TableData');

    const options = useSelector((state) => getStatus(state));

    const [number, setNumber] = useState('');
    const [status, setStatus] = useState('');
    const [peopleAmount, setPeopleAmount] = useState('');
    const [maxPeopleAmount, setMaxPeopleAmount] = useState('');
    const [bill, setBill] = useState(0);
    const [displayBill, setDisplayBill] = useState(false);

    useEffect(() => {
        if (table) {
            setNumber(table.number);
            setStatus(table.status);
            setPeopleAmount(table.peopleAmount);
            setMaxPeopleAmount(table.maxPeopleAmount);
            setBill(table.bill);
            if (table.status === options[0]) {
                setDisplayBill(true);
            }
        }
    }, [table, options]);


    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(requestUpdateTableForm({ status, peopleAmount, maxPeopleAmount, bill}, tableId));
        navigate('/');
    };


    const handlePeopleAmount = (e) => {
        if (!(status === options[1]) || !(status === options[2])) 
            setPeopleAmount(e); 
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

    return (

        <div>  
            <h1 className="py-4">Table{number}</h1>
            <Form style={{ width: '50rem' }} onSubmit={handleSubmit} >

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
                            <Form.Control className="form-control form-control-sm" value={peopleAmount} onChange={e => handlePeopleAmount(e.target.value)} />
                            <p className="mb-0 mr-1 px-1" style={{ fontSize: '15px' }}>/</p>
                            <Form.Control className="form-control form-control-sm" value={maxPeopleAmount} onChange={e => setMaxPeopleAmount(e.target.value)}/>
                        </Col>
                    </Stack>

                    { displayBill && <Stack direction="horizontal" gap={3}>
                        <Form.Label className="pt-1"><b>Bill:</b></Form.Label>
                        <Col xs={1} className="d-flex align-items-center mx-4 px-2" >
                            <p className="mb-0 mr-1 px-1" style={{ fontSize: '15px' }}>$</p>
                            <Form.Control className="form-control form-control-sm" value={bill} onChange={e => setBill(e.target.value)} />
                        </Col>
                    </Stack> }

                </Form.Group>
                <Button type="submit" variant="primary" className="mx-1 mt-5">Update</Button>
            </Form>
       
        </div>
    )

}

export default SingleTable;