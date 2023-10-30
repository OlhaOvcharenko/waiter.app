import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTableRequest } from "../../../redux/tableRedux";
import SingleTable from "../SingleTable/SingleTableForm";

const AddTableForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (newTable) => {
      dispatch(addTableRequest(newTable));
      navigate('/');
    };
  

    return (
        <SingleTable action={handleSubmit} actionText="Add table"  />
    )

}

export default AddTableForm;