import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import  { Col } from "react-bootstrap";
import { Stack } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTableById } from "../../../redux/tableRedux";
import { requestUpdateTableForm } from "../../../redux/tableRedux";


const SingleTable = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
   

    const { tableId } = useParams();

    const tableData = useSelector((state) => getTableById(state, tableId));
    console.log(tableData, 'TableData');

    const [id, setId] = useState(tableData.tableId || '');
    const [status, setTableStatus] = useState(tableData.status || '');
    const [peopleAmount, setPeopleAmount] = useState(tableData.peopleAmount || '');
    const [maxPeopleAmount, setMaxPeopleAmount] = useState(tableData.maxPeopleAmount || '');
    const [bill, setBill] = useState(tableData.bill || '');

    const handleSubmit = () => {
        dispatch(requestUpdateTableForm({ id, status, peopleAmount, maxPeopleAmount, bill}));
        navigate('/');
    };
    
    console.log(id, status, peopleAmount, 'singledata');

    return (

        <div>  
            <h1 className="py-4">Table{id}</h1>
            <Form style={{ width: '50rem' }} onSubmit={handleSubmit}>

                <Form.Group as={Row} >

                    <Stack direction="horizontal" gap={2} className="mb-2">
                        <Form.Label ><b>Status:</b></Form.Label>
                        <Col sm={4} className="px-3" >
                        <Form.Select  value={status} onChange={e => setTableStatus(e.target.value)}>
                        </Form.Select>
                        </Col>
                    </Stack>

                    <Stack direction="horizontal" gap={3} className="mb-2" style={{ width: '15rem' }}>
                        <Form.Label><b>People:</b></Form.Label>
                        <Col xs={5} className="d-flex align-items-center">
                            <Form.Control className="form-control form-control-sm" value={peopleAmount} onChange={e => setPeopleAmount(e.target.value)}/>
                            <p className="mb-0 mr-1 px-1" style={{ fontSize: '15px' }}>/</p>
                            <Form.Control className="form-control form-control-sm" value={maxPeopleAmount} onChange={e => setMaxPeopleAmount(e.target.value)} />
                        </Col>
                    </Stack>

                    <Stack direction="horizontal" gap={3}>
                        <Form.Label className="pt-1"><b>Bill:</b></Form.Label>
                        <Col xs={1} className="d-flex align-items-center mx-4 px-2" >
                            <p className="mb-0 mr-1 px-1" style={{ fontSize: '15px' }}>$</p>
                            <Form.Control className="form-control form-control-sm" value={bill} onChange={e => setBill(e.target.value)}/>
                        </Col>
                    </Stack>

                </Form.Group>
                <Button type="submit" variant="primary" className="mx-1 mt-5">Update</Button>
            </Form>
       
        </div>
    )

}

export default SingleTable;