import { useSelector } from "react-redux";
import { getAllTables } from "../../../redux/tableRedux";
import { Stack } from "react-bootstrap";
import  { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import  { Row } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";

const AllTables = () => {

    const tables =  useSelector((state) => getAllTables(state))

    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Simulate an asynchronous operation, e.g., fetching data
      setTimeout(() => {
        // After the data is loaded or some other operation is complete
        setLoading(false); // Set loading state to false
      }, 300); 
    }, []);


    return(
        <div>

            {loading && <Button variant="tuned-light">
                <Spinner animation="border" variant="primary" size="lg" />
                 Loading ...
            </Button>}

            <Row>
            <h1 className="mt-4">All Tables</h1>
            {tables.map((table) => (
                <Stack  key={table.id}direction="horizontal" gap={3} className="border-bottom pt-3">
                    <h2 className="p-2">Table {table.id}</h2>
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