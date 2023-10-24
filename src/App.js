import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchTables } from "./redux/tableRedux";
import Home from "./components/pages/Home/Home";
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch])

  return (
    <main>
      <Container >
        <Header   />
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
        <Footer />
      </Container>
    </main>
  )
}

export default App;
