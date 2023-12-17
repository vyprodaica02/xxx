// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import creatAcc from "../Data/createAccount";
const store = configureStore({
  reducer: {
    listUser: creatAcc,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
