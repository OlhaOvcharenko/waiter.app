import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTableById, requestUpdateTableForm } from "../../../redux/tableRedux";
import SingleTable from "../SingleTable/SingleTableForm";
import { useParams } from "react-router-dom";


const EditSingleTable = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { tableId } = useParams();

    const tableData = useSelector((state) => getTableById(state, tableId));

    const handleSubmit = (tableData) => {
        dispatch(requestUpdateTableForm({ ...tableData, tableId }));
        navigate('/');
    };
    console.log(tableData, 'TableData');

    return (
        <SingleTable
            tableId={tableId}
            action={handleSubmit}
            actionText='Update'
            status={tableData.status}
            peopleAmount={tableData.peopleAmount}
            maxPeopleAmount={tableData.maxPeopleAmount}
            bill={tableData.bill}
        />

    );

}

export default EditSingleTable;