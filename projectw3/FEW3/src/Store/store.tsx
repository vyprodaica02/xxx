// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Data/counterSlice";
import creatAcc from "../Data/createAccount";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    listUser: creatAcc,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
