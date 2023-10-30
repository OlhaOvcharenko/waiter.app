import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import SingleTable from "../SingleTable/SingleTableForm";
import { getTableById } from "../../../redux/tableRedux";
import { useSelector } from "react-redux";
import { requestUpdateTableForm } from "../../../redux/tableRedux";
import { useParams } from "react-router-dom";

const UpdateTableForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { tableId } = useParams();

    const table = useSelector((state) => getTableById(state, tableId));

    const handleSubmit = (updatedTable) => {
        dispatch(requestUpdateTableForm({ ...updatedTable, tableId}));
        navigate('/');
    };

    return (
        <SingleTable
            tableId = {tableId}
            action = {handleSubmit}
            actionText={'Update'}
            number={table.number}
            status = {table.status}
            peopleAmount ={table.peopleAmount}
            maxPeopleAmount ={table.maxPeopleAmount}
            bill = { table.bill}
            tableData = { table.tableData}
        />

    );
};

export default  UpdateTableForm;