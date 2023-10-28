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
    const [people, setPeople] = useState('');
    const [maxPeople, setMaxPeople] = useState('');
    const [bill, setBill] = useState(1);
    //const [sumOfBill, setSum] = useState(false);

    useEffect(() => {
        if (table) {
            setNumber(table.number);
            setStatus(table.status);
            setPeople(table.peopleAmount);
            setMaxPeople(table.maxPeopleAmount);
            setBill(table.bill);
        }
    }, [table, options]);


    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(requestUpdateTableForm({ status, people, maxPeople, bill}, tableId));
        navigate('/');
    };

    const handleStatusChange = (selectedStatus) => {
      
        setStatus(selectedStatus);
      
        if (selectedStatus === "Busy") {
          setBill(0); // Set bill to 0 when the status is "Busy"
        } else {
          setBill(null); // Set bill to null (or any suitable initial value) when the status is not "Busy"
        }
    
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
                            <Form.Control className="form-control form-control-sm" value={people} onChange={e => setPeople(e.target.value)} />
                            <p className="mb-0 mr-1 px-1" style={{ fontSize: '15px' }}>/</p>
                            <Form.Control className="form-control form-control-sm" value={maxPeople} onChange={e => setMaxPeople(e.target.value)}/>
                        </Col>
                    </Stack>

                    { bill !== null && <Stack direction="horizontal" gap={3}>
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