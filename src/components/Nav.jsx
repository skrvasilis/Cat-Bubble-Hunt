import React, { useState, useEffect } from "react";
import { useContext } from "react";
import MyContext from "../context/MyContext"
import "./nav.css";
import logo from "../assets/logo2.png"

const Nav = () => {
 const {seconds , clickCount , level} = useContext(MyContext)

  return (
    <div className="nav">
        <div className="logo-con">
      <img src={logo} alt="" className="logo"/>
      <h3>Cat Bubble Hunt!</h3>
      </div>
      <div className="other">
      <div>Timer: {seconds}</div>
      <div>Cats found: {clickCount}</div>
      </div>
    </div>
  );
};

export default Nav;
