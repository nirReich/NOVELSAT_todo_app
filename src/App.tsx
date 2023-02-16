import "./App.css";
import HomePage from "./screens/HomePage";
import Header from "./layout/header/Header";
import { Routes, Route } from "react-router-dom";
import Finished from "./screens/Finished";
import BasicModal from "./components/modal/Modal";
import Form from "./components/form/Form";
import Footer from "./layout/footer/Footer";
import Page404 from "./screens/page404/Page404";
import { useEffect } from "react";
import appUtils from "./utils";
import Layout from "./layout/Layout";

function App() {
  useEffect(() => {
    //setting the localStorage
    let localStorageState;
    const taskStorageState:string|null = localStorage.getItem('taskItems');
    if (taskStorageState !== null) {
      localStorageState = JSON.parse(taskStorageState)
    }
    if (!localStorageState) {
      localStorage.setItem('taskItems',JSON.stringify(appUtils.initialState))
    }  
  
  }, [])
  
  return (
    <div className="App">
      <BasicModal>
        <Form />
      </BasicModal>
      <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={<HomePage />} />
        <Route path="/finished" element={<Finished />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
