import { useContext } from "react";
import { useState } from "react";
import Modal from "./components/Modal";
import Nav from "./components/Nav";
import Shapes from "./components/Shapes";
import MyContext from "./context/MyContext";

function App() {
  const {modalOpen} = useContext(MyContext)
  return (
    <>
      <Nav />
      <Shapes />
      {modalOpen &&<Modal/> }
    </>
  );
}

export default App;
