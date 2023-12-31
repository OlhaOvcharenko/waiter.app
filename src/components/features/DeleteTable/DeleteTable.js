import { Modal } from "react-bootstrap";
import  { Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTableRequest } from "../../../redux/tableRedux";


const DeleteTable = ({ id }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();

    const handleDeleteTable = () => {
       
        dispatch(deleteTableRequest(id));
        handleClose(); 
    };

    return(
        <div>
           <Button variant="outline-secondary" onClick={handleShow} className={'mr-1'} >Delete table</Button>{' '}

           <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>The operation will completely remove this table from the app.Are you sure you want to do that?</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleDeleteTable}>
                    Remove
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default DeleteTable;