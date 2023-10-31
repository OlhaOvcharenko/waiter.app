
import { getAllTables } from "../../../redux/tableRedux";
import { Stack } from "react-bootstrap";
import  { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import DeleteTable from "../DeleteTable/DeleteTable";
import { useState } from "react";
import { useEffect } from "react";

const AllTables = () => {

    const tables = useSelector((state) => getAllTables(state));
    
    return (
      <div>
        <Stack direction="horizontal" gap={4}>
          <div className="p-4">
            <h1>All Tables</h1>
          </div>
          <div className="p-2 ms-auto">
            <Link to="/table/add">
              <Button variant="outline-info">Add table</Button>
            </Link>
          </div>
        </Stack>
        <Row>
            {tables.map((table) => (
              <Stack key={table.id} direction="horizontal" gap={3} className="border-bottom pt-3">
                <h2 className="p-2"> Table {table.number}</h2>
                <p className="pt-3"><b>Status:</b> {table.status}</p>
                <Link to={`/table/${table.id}`} className="ms-auto">
                  <Button variant="primary">Show more</Button>
                </Link>
                <DeleteTable id={table.id} />
              </Stack>
            ))}
        </Row>
      </div>
    );
}

export default AllTables;


  
  