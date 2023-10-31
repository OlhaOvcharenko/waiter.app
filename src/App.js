import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchTables } from "./redux/tableRedux";
import Home from "./components/pages/Home/Home";
import Header from "./components/views/Header/Header";

import Footer from "./components/pages/Footer/Footer";
import NotFound from "./components/pages/Not Found/Not Found";
import AddTable from "./components/views/AddTable/AddTable";

import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { fetchStatus } from "./redux/optiosStatusRedux";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import UpdateTable from "./components/views/UpdateTable/UpdateTable";


const App = () => {

  const dispatch = useDispatch();
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the necessary data for your application
    Promise.all([dispatch(fetchTables()), dispatch(fetchStatus())])
      .then(() => {
        // Data has been fetched, so you can stop loading
        setTimeout(() => {
          setLoading(false); 
        }, 1000); 
  
      })
  }, [dispatch]);

  return (
    <main>
      <Container>
        <Header />
        {loading ? (
          <Button variant="tuned-light">
            <Spinner animation="border" variant="primary" size="lg" />
            Loading ...
          </Button>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/table/:tableId" element={<UpdateTable />} />
            <Route path="/table/add" element={<AddTable />} />
            <Route path="*" element={<NotFound />}/>
          </Routes>
        )}
        <Footer />
      </Container>
    </main>
  );
};

export default App;

