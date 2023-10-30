
import AddTableForm from "../../features/AddTableForm/AddTableForm";

const AddTable = (props) => {

    return(
    
        <div>

            <h1>Add Table</h1>
            <AddTableForm tableId={props.id} />
        
        </div>
    )

}

export default AddTable;