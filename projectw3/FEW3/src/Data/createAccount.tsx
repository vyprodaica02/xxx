// Trong file createAccount.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Wallet } from "ethers";
import axios from "axios";

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

export const createAccount = createAsyncThunk(
  "listUser/createAccount",
  async (_, thunkAPI) => {
    const wallet = Wallet.createRandom();
    const address = wallet.address;
    const privateKey = wallet.privateKey;

    let mnemonic: string | null = null;
    if (wallet.mnemonic) {
      mnemonic = wallet.mnemonic.phrase;
    }

    const newAccount = {
      address,
      privateKey,
      mnemonic: mnemonic || "",
    };

    try {
      // Gọi API để lưu tài khoản mới
      const response = await axios.post(
        "https://localhost:7083/api/CreateListAccount/CreateLis",
        newAccount
      );

      // Thành công: trả về dữ liệu để cập nhật store
      return response.data;
    } catch (error) {
      // Xử lý lỗi nếu cần thiết
      console.error("Error creating account:", error);
      // Thất bại: trả về lỗi để xử lý
      return thunkAPI.rejectWithValue("Error creating account");
    }
  }
);

const userSlice = createSlice({
  name: "listUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createAccount.fulfilled, (state, action) => {
      state.lstAcc.push(action.payload);
    });
  },
});

export default userSlice.reducer;
