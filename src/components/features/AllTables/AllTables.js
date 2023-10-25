import { useSelector } from "react-redux";
import { getAllTables } from "../../../redux/tableRedux";
import { Stack } from "react-bootstrap";
import  { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import  { Row } from "react-bootstrap";

const AllTables = () => {

    const tables =  useSelector((state) => getAllTables(state))

    return(
        <div>
            <h1 className="mt-4">All Tables</h1>
            <Row>
            {tables.map((table) => (
                <Stack  key={table.id}direction="horizontal" gap={3} className="border-bottom pt-3">
                    <h2 className="p-2">Table {table.number}</h2>
                    <p className="pt-3"><b>Status:</b> {table.status}</p>
                    <Link to={`/table/${table.id}`} className="ms-auto">
                        <Button variant="primary">Show  more</Button>
                    </Link>
                </Stack>
            ))}
            </Row>
        </div>
    )
}

export default AllTables;