import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalOpen: true,
  counter: 0,
  isActive: false,
  seconds: 30,
  userName: null,
  listOfScores: [],
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setModalOpen: (state, action) => {
      state.modalOpen = action.payload;
    },
    setCounter: (state, action) => {
      state.counter = action.payload;
    },
    setIsActive: (state, action) => {
      state.isActive = action.payload;
    },
    setSeconds: (state, action) => {
      state.seconds = action.payload;
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const {
  setModalOpen,
  setCounter,
  setIsActive,
  setSeconds,
  setUserName,
} = counterSlice.actions;

export default counterSlice.reducer;
