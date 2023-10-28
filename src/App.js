import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchTables } from "./redux/tableRedux";
import Home from "./components/pages/Home/Home";
import Header from "./components/views/Header/Header";

import Footer from "./components/pages/Footer/Footer";
import Table from "./components/pages/Table/Table";

import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { fetchStatus } from "./redux/optiosStatusRedux";



const App = () => {

  const dispatch = useDispatch();

      
  useEffect(() => {
    dispatch(fetchTables());
  }, [dispatch]);


  useEffect(() => {
    dispatch(fetchStatus());
  }, [dispatch]);



  return (
    <main>
      <Container >
        <Header   />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/table/:tableId" element={<Table />}/>
        </Routes>
        <Footer />
      </Container>
    </main>
  )
}

export default App;
