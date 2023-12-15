/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { Wallet } from "ethers";
interface Listacc {
  lstAcc: object;
}

const initialState: Listacc = {
  lstAcc: {},
};

const createList = createSlice({
  name: "CreateListAccSr",
  initialState,
  reducers: {},
});
