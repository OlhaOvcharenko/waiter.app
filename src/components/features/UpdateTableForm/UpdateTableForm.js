
import { useDispatch } from "react-redux";

import {  getTableById, updateTableFormRequest } from "../../../redux/tableRedux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import SingleTableForm from "../SingleTableForm/SingleTableForm";

const UpdateTableForm = () => {

    const dispatch = useDispatch();

    const { tableId } = useParams();

    const table = useSelector((state) => getTableById(state, tableId));

    const handleSubmit = (updatedTable) => {
        dispatch(updateTableFormRequest({ updatedTable, tableId }));
    };

    console.log('table',table)

    if(!table) return <Navigate to="/" />
    else 

    return (
        <SingleTableForm
            tableId = {tableId}
            action = {handleSubmit}
            actionText={'Update'}
            number={table.number}
            status = {table.status}
            peopleAmount ={table.peopleAmount}
            maxPeopleAmount ={table.maxPeopleAmount}
            bill = { table.bill}
            tableData = { table.tableData}
            tableHeader = {'Table'}
        />

    );
};

export default  UpdateTableForm;