
import UpdateTableForm from "../../features/UpdateTableForm/UpdateTableForm"

const UpdateTable = ({tableId, updateTable}) => {

    return(
        <UpdateTableForm tableId={tableId} data={updateTable} />
    )
}

export default UpdateTable;