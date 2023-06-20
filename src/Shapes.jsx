import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import cat from "./assets/scared-cat.jpg";
// import "./App.css";
import Drag from "./Drag";

const Shapes = ({ num }) => {
  const [componentArray, setComponentArray] = useState([]);

  // const [initialPosition, setInitialPosition]= useState({ x: `${Math.floor(Math.random() * (window.innerWidth - 90))}`, y: `${Math.floor(Math.random() * (window.innerHeight - 90))}` })

  function handleResize() {
    console.log("run");
    let height = window.innerHeight;
    let width = window.innerWidth;

    const maxHorizontalItems = Math.floor(height / 30);
    const maxVerticalItems = Math.floor(width / 53);

    const count = maxHorizontalItems * maxVerticalItems;
    // if (count < 300) {
    const newArray = Array.from({ length: count }, (_, index) => index);
    const arrStyled = newArray.map((item, i) => {
      return i === 0
        ? { ...item, ...generateStyle("cat") }
        : { ...item, ...generateStyle() };
    });
    console.log(arrStyled);
    setComponentArray(arrStyled);
  }

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  useEffect(() => {
    handleResize();
  }, []);

  const [value, setValue] = useState(true);
  const randomMargin = () => {
    const num = Math.floor(Math.random() * (20 - 2) + 2);
    return num + "px";
  };

  const randomColor = () => {
    return (
      "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
    );
  };

  const polygons = [
    "circle(50% at 50% 50%)",
    "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
    "polygon(50% 0%, 0% 100%, 100% 100%)",
    "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
  ];

  const colors = ["red", "yellow", "green", "pink", "blue", "violet", "blue"];

  const clickHandler = (e, num) => {
    console.log(num);
    const filtered = componentArray.filter((item, i) => i !== num);
    if (num !== 0) {
      setComponentArray(filtered);
    } else {
      console.log("caaaatttt");
      const arrStyled = filtered.map((item, i) => {
        return i === 0
          ? { ...item, ...generateStyle("cat") }
          : { ...item, ...generateStyle() };
      });
      setComponentArray(arrStyled);
    }
  };

  const generateStyle = (str) => {
    if (str === "cat") {
      return {
        padding: 0,
        border: "none",
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        boxShadow: "5px 5px 5px white",
        //   clipPath: polygons[Math.floor(Math.random() * polygons.length)],
        clipPath: "circle(50% at 50% 50%)",
        position: "absolute",
        left: `${Math.floor(Math.random() * (window.innerWidth - 90))}px`,
        top: `${Math.floor(Math.random() * (window.innerHeight - 90))}px`,
      };
    } else {
      return {
        padding: randomMargin(),
        border: "none",
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        boxShadow: "5px 5px 5px white",
        //   clipPath: polygons[Math.floor(Math.random() * polygons.length)],
        clipPath: "circle(50% at 50% 50%)",
        position: "absolute",
        left: `${Math.floor(Math.random() * (window.innerWidth - 90))}px`,
        top: `${Math.floor(Math.random() * (window.innerHeight - 90))}px`,
      };
    }
  };

  return (
    <div className="shapes">
      <p style={{ color: "white" }}>{componentArray.length}</p>
      {componentArray.map((item, index) => {
        return (
          <div>
            {" "}
            <p
              key={index}
              onClick={(e) => clickHandler(e, index)}
              style={item}
              // style={index === 0 ? generateStyle("cat") : generateStyle()}
            >
              {" "}
              {index === 0 && <img src={cat} />}
            </p>
          </div>
          // <Drag key={index} index={index}  clickHandler={clickHandler}/>
        );
      })}
    </div>
  );
};

export default Shapes;
