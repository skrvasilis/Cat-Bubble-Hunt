import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSeconds,
  setCounter,
  setIsActive,
  setModalOpen,
} from "../redux/counterSlice";
import "./modal.css";
const Modal = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const isActive = useSelector((state) => state.counter.isActive);
  const modalOpen = useSelector((state) => state.counter.modalOpen);
  

  const closeModal = () => {
    dispatch(setModalOpen(false));
    dispatch(setCounter(0));
    dispatch(setIsActive(true));
  };

  const getRandomCoordinate = () => {
    const min = 20; // Minimum distance from modal edges
    const max = 80; // Maximum distance from modal edges
    const coordinate = Math.floor(Math.random() * (max - min + 1) + min);
    return `${coordinate}%`;
  };

  return (
    <div>
      {counter === 0 ? (
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
              {/* <div className="user">
                <h3>username</h3>
                <input type="text" /> */}

              {/* </div> */}
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
            <h2>WOW!! You found {counter} cats!!</h2>
            <p>Would you like to play again?</p>
            <button onClick={closeModal}>Play Again</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
