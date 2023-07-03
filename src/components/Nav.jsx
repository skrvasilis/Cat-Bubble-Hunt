import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSeconds,
  setCounter,
  setIsActive,
  setModalOpen,
} from "../redux/counterSlice";
import "./nav.css";
import logo from "../assets/logo2.png";

const Nav = () => {
  const dispatch = useDispatch();
  const seconds = useSelector((state) => state.counter.seconds);
  const counter = useSelector((state) => state.counter.counter);
  const isActive = useSelector((state) => state.counter.isActive);
  const modalOpen = useSelector((state) => state.counter.modalOpen);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        dispatch(setSeconds(seconds - 1));
      }, 1000);
    }  else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    } 

    if (seconds === 0) {
      dispatch(setIsActive(false));
      dispatch(setSeconds(30));
      dispatch(setModalOpen(true));
    }

    return () => clearInterval(interval);
  }, [seconds , isActive]);

  return (
    <div className="nav">
      <div className="logo-con">
        <img src={logo} alt="" className="logo" />
        <h3>Cat Bubble Hunt!</h3>
      </div>
      <div className="other">
        <div>Timer: {seconds}</div>
        <div>Cats found: {counter}</div>
      </div>
    </div>
  );
};

export default Nav;
