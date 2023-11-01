
import { getAllTables } from "../../../redux/tableRedux";
import { Stack } from "react-bootstrap";
import  { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import DeleteTable from "../DeleteTable/DeleteTable";


const AllTables = () => {

    const tables = useSelector((state) => getAllTables(state));
    console.log(tables, "tables")
    
    return (
      <div>
        <Stack direction="horizontal" gap={{ sm: 2, lg: 4 }}className="justify-content-between align-items-center" >
          <div className="p-4">
            <h1>All Tables</h1>
          </div>
          <div className="p-2 ms-auto">
            <Link to="/table/add">
              <Button variant="primary">Add table</Button>
            </Link>
          </div>
        </Stack>
        <Row>
            {tables.map((table,index ) => (
              <Stack key={table.id} direction="horizontal" gap = {{ sm: 2, lg: 3 }} className="border-bottom pt-3 ">
                <h2 className="p-2"> Table {index+1}</h2>
                <p><b>Status:</b> {table.status}</p>
                <Link to={`/table/${table.id}`} className="ms-auto">
                  <Button variant="outline-primary" >Show more</Button>
                </Link>
                <DeleteTable id={table.id}  />
              </Stack>
            ))}
        </Row>
      </div>
    );
}

export default AllTables;


  
  