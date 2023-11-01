import { useDispatch } from "react-redux";
import { addTableRequest } from "../../../redux/tableRedux";
import SingleTable from "../SingleTableForm/SingleTableForm";

const AddTableForm = () => {

  const dispatch = useDispatch();

  /*useEffect(() => {
    // Fetch the existing tables and find the maximum number
    const existingNumbers = tables.map((table) => parseInt(table.number, 10));
    const maxNumber = Math.max(...existingNumbers);

    // Generate the new number
    const newNumber = maxNumber >= 0 ? maxNumber + 1 : 1;
    setNewTableNumber(newNumber.toString());
  }, [tables]);*/


  const handleSubmit = (status, peopleAmount, maxPeopleAmount, bill) => {

    const newCreatedTable = { status, peopleAmount, maxPeopleAmount, bill}
    dispatch(addTableRequest(newCreatedTable));
    console.log(newCreatedTable, "newTable");

  };

   

    return (
        <SingleTable action={handleSubmit} actionText="Add table" tableHeader = {'Add Table'} />
    )
}

export default AddTableForm;