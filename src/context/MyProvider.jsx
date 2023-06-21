import { useMemo } from "react";
import { useState, useEffect } from "react";
import MyContext from "./MyContext";
const MyProvider = ({ children }) => {
    const [seconds, setSeconds] = useState(30);
    const [isActive, setIsActive] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [level, setLevel] = useState(0);
  const [modalOpen, setModalOpen] = useState(true);

  useEffect(() => {
    let interval = null;

    console.log("yes")
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    if (seconds === 0) {
      setIsActive(false);
      setSeconds(30)
      setModalOpen(true)
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <MyContext.Provider
      value={{ seconds , setSeconds, isActive , setIsActive, clickCount, setClickCount, level, setLevel , modalOpen , setModalOpen }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
