/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Wallet } from "ethers";

interface Account {
  address: string;
  privateKey: string;
  mnemonic: string;
}

interface UserState {
  lstAcc: Account[];
}

const initialState: UserState = {
  lstAcc: [],
};

const handleCreateAccounts = (numAccounts: number) => {
  try {
    const accounts: Account[] = [];
    for (let i = 0; i < numAccounts; i++) {
      const wallet = Wallet.createRandom();
      const address = wallet.address;
      const privateKey = wallet.privateKey;

      let mnemonic: string | null = null;
      if (wallet.mnemonic) {
        mnemonic = wallet.mnemonic.phrase;
      }

      accounts.push({
        address,
        privateKey,
        mnemonic: mnemonic || "",
      });
    }
    return accounts;
  } catch (error) {
    console.error("Lỗi khi tạo tài khoản mới:", error);
    return [];
  }
};

const userSlice = createSlice({
  name: "listUser",
  initialState,
  reducers: {
    createlstAcc: (state, action: PayloadAction<number>) => {
      const accounts = handleCreateAccounts(action.payload);
      state.lstAcc.push(...accounts);
    },
  },
});

export const { createlstAcc } = userSlice.actions;
export default userSlice.reducer;
