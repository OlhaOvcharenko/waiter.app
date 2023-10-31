import { useDispatch } from "react-redux";
import { addTableRequest } from "../../../redux/tableRedux";
import SingleTable from "../SingleTableForm/SingleTableForm";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getAllTables } from "../../../redux/tableRedux";
import { useEffect } from "react";

const AddTableForm = () => {

  const dispatch = useDispatch();
  const [newTableNumber, setNewTableNumber] = useState('');
  const tables = useSelector((state) => getAllTables(state));
    

  useEffect(() => {
    // Fetch the existing tables and find the maximum number
    const existingNumbers = tables.map((table) => parseInt(table.number, 10));
    const maxNumber = Math.max(...existingNumbers);

    // Generate the new number
    const newNumber = maxNumber >= 0 ? maxNumber + 1 : 1;
    setNewTableNumber(newNumber.toString());
  }, [tables]);


  const handleSubmit = (newTable) => {

    const newCreatedTable = { ...newTable, number: newTableNumber }
    dispatch(addTableRequest(newCreatedTable));

  };

   
  return (
      <SingleTable action={handleSubmit} actionText="Add table" tableHeader = {'Add Table'} />
  )
}

export default AddTableForm;