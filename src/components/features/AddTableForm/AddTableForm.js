import { useDispatch } from "react-redux";
import { addTableRequest } from "../../../redux/tableRedux";
import SingleTable from "../SingleTable/SingleTableForm";

const AddTableForm = () => {

    const dispatch = useDispatch();

    const handleSubmit = (newTable) => {
      dispatch(addTableRequest(newTable));
    };
  
    return (
        <SingleTable action={handleSubmit} actionText="Add table" tableHeader = {'Add Table'} />
    )
}

export default AddTableForm;