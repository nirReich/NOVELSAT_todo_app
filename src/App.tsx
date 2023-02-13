import "./App.css";
import HomePage from "./screens/HomePage";
import Header from "./layout/header/Header";
import { Routes, Route } from "react-router-dom";
import Finished from "./screens/Finished";
import BasicModal from "./components/modal/Modal";
import Form from "./components/form/Form";
import Footer from "./layout/footer/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <BasicModal>
        <Form />
      </BasicModal>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/finished" element={<Finished />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
