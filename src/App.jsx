import Modal from "./components/Modal";
import Nav from "./components/Nav";
import Shapes from "./components/Shapes";
import { useSelector } from "react-redux";

function App() {
  const modalOpen = useSelector((state) => state.counter.modalOpen);
  const counter = useSelector((state) => state.counter.counter);
  console.log(counter)
  return (
    <>
      <Nav />
      <Shapes />
      {modalOpen && <Modal />}
    </>
  );
}

export default App;
