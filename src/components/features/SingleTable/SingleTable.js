import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import  { Col } from "react-bootstrap";
import { Stack } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {getTableById } from "../../../redux/tableRedux";
import { useSelector } from "react-redux";

const SingleTable = () => {

    const { tableId } = useParams();

    const tableData = useSelector(state => getTableById(state, tableId));
    console.log("tableData", tableData)

    return (

        <div>  
            <h1 className="py-4">Table{tableData.id}</h1>
            <Form style={{ width: '50rem' }}>

                <Form.Group as={Row} >

                    <Stack direction="horizontal" gap={2} className="mb-2">
                        <Form.Label ><b>Status:</b></Form.Label>
                        <Col sm={4} className="px-3" >
                        <Form.Select>
                            <option>{tableData.status}</option>
                        </Form.Select>
                        </Col>
                    </Stack>

                    <Stack direction="horizontal" gap={3} className="mb-2" style={{ width: '15rem' }}>
                        <Form.Label><b>People:</b></Form.Label>
                        <Col xs={5} className="d-flex align-items-center">
                            <Form.Control className="form-control form-control-sm" value={tableData.peopleAmount}/>
                            <p className="mb-0 mr-1 px-1" style={{ fontSize: '15px' }}>/</p>
                            <Form.Control className="form-control form-control-sm" value={tableData.maxPeopleAmount} />
                        </Col>
                    </Stack>

                    <Stack direction="horizontal" gap={3}>
                        <Form.Label className="pt-1"><b>Bill:</b></Form.Label>
                        <Col xs={1} className="d-flex align-items-center mx-4 px-2" >
                            <p className="mb-0 mr-1 px-1" style={{ fontSize: '15px' }}>$</p>
                            <Form.Control className="form-control form-control-sm" value={tableData.bill}/>
                        </Col>
                    </Stack>

                </Form.Group>
                <Button variant="primary" className="mt-3">Update</Button>
            </Form>
       
        </div>
    )

}

export default SingleTable;