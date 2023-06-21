import React, { useState } from "react";
import { useContext } from "react";
import MyContext from "../context/MyContext";
import "./modal.css";
const Modal = () => {
  const {
    setClickCount,
    setLevel,
    clickCount,
    setModalOpen,
    level,
    setIsActive,
  } = useContext(MyContext);

  const closeModal = () => {
    setModalOpen(false);
    setClickCount(0);
    setLevel((prev) => prev + 1);
    setIsActive(true);
  };

  const getRandomCoordinate = () => {
    const min = 20; // Minimum distance from modal edges
    const max = 80; // Maximum distance from modal edges
    const coordinate = Math.floor(Math.random() * (max - min + 1) + min);
    return `${coordinate}%`;
  };

  return (
    <div>
      {level === 0 ? (
        <>
          <div className="modal">
            <div className="modal-content">
              <h2>Welcome to the Cat Bubble Hunt!</h2>
              <p>
                Can you find the hidden cat amidst the sea of colorful bubbles?
              </p>
              <p>Instructions:</p>
              <ul>
                <li>Scan the bubbles carefully to locate the cat.</li>
                <li>Click on the bubble that you think contains the cat.</li>
                <li>Be quick! You have a limited amount of time.</li>
                <li>Each correct guess earns you points.</li>
              </ul>
              <button onClick={closeModal}>Start Game</button>
              <div
                className="circle"
                style={{
                  top: getRandomCoordinate(),
                  left: getRandomCoordinate(),
                }}
              ></div>
              <div
                className="circle"
                style={{
                  top: getRandomCoordinate(),
                  left: getRandomCoordinate(),
                }}
              ></div>
              <div
                className="circle"
                style={{
                  top: getRandomCoordinate(),
                  left: getRandomCoordinate(),
                }}
              ></div>
            </div>
          </div>
        </>
      ) : (
        <div className="modal">
          <div className="modal-content">
            <h2>WOW!! You found {clickCount} cats!!</h2>
            <p>Would you like to play again?</p>
            <button onClick={closeModal}>Play Again</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
