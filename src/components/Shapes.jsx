import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import cat from "../assets/scared-cat.jpg";
import cat2 from "../assets/cat2.jpg";
import cat3 from "../assets/cat3.jpg";
import cat4 from "../assets/cat4.jpg";
import "../App.css";
import { useContext } from "react";
import MyContext from "../context/MyContext";

const Shapes = ({ num }) => {
  const [componentArray, setComponentArray] = useState([]);
  const { setClickCount, setModalOpen } = useContext(MyContext);
  const cats = [cat, cat2, cat3, cat4];

  function handleResize() {
    console.log("run");
    let height = window.innerHeight;
    let width = window.innerWidth;

    console.log(width);

    let maxHorizontalItems = 0;

    let maxVerticalItems = 0;

    if (width < 600) {
      maxHorizontalItems = Math.floor(height / 45);
      maxVerticalItems = Math.floor(width / 40);
    } else {
      maxHorizontalItems = Math.floor(height / 53);
      maxVerticalItems = Math.floor(width / 33);
    }

    const count = maxHorizontalItems * maxVerticalItems;
    const newArray = Array.from({ length: count }, (_, index) => index);
    const arrStyled = newArray.map((item, i) => {
      if (width < 600) {
        return i === 0
          ? { ...item, style: { ...generateStyle("cat") }, cat: randomCat() }
          : { ...item, style: { ...generateStyle("small") } };
      } else {
        return i === 0
          ? { ...item, style: { ...generateStyle("cat") }, cat: randomCat() }
          : { ...item, style: { ...generateStyle() } };
      }
    });
    console.log(arrStyled);
    setComponentArray(arrStyled);
  }

  useEffect(() => {
    handleResize();
  }, []);

  const randomMargin = () => {
    const num = Math.floor(Math.random() * (20 - 2) + 2);
    return num + "px";
  };

  const randomColor = () => {
    return (
      "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
    );
  };

  const colors = [
    "#e75656",
    "#cfcf73",
    "#64d164",
    "pink",
    "#5353ec",
    "a364a3",
    "#4d4dca",
  ];
  // const colors = ["red", "yellow", "#64d164", "pink", "#5353ec", "violet", "blue"];

  const clickHandler = (e, num) => {
    console.log(num);
    const filtered = componentArray.filter((item, i) => i !== num);
    if (num !== 0) {
      setComponentArray(filtered);
    } else {
      handleResize();
      setClickCount((prev) => prev + 1);

      // setModalOpen(true);
    }
  };

  const randomCat = () => {
    return cats[Math.floor(Math.random() * cats.length)];
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
        top: `${Math.floor(Math.random() * (window.innerHeight - 120))}px`,
      };
    } else if (str === "small") {
      return {
        padding: randomMargin(),
        border: "none",
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        boxShadow: "5px 5px 5px white",
        //   clipPath: polygons[Math.floor(Math.random() * polygons.length)],
        clipPath: "circle(50% at 50% 50%)",
        position: "absolute",
        left: `${Math.floor(Math.random() * (window.innerWidth - 40))}px`,
        top: `${Math.floor(Math.random() * (window.innerHeight - 80))}px`,
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
        left: `${Math.floor(Math.random() * (window.innerWidth - 60))}px`,
        top: `${Math.floor(Math.random() * (window.innerHeight - 110))}px`,
      };
    }
  };

  console.log(componentArray);

  return (
    <div className="shapes">
      <p>{componentArray.length}</p>
      {componentArray.map((item, index) => {
        return (
          <p
            key={index}
            onClick={(e) => clickHandler(e, index)}
            style={item.style}
          >
            {index === 0 && <img src={item.cat} />}
          </p>
        );
      })}
    </div>
  );
};

export default Shapes;
