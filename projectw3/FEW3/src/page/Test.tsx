/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// Trong file YourComponent.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createAccount } from "../Data/createAccount";
import * as XLSX from "xlsx";
const YourComponent = () => {
  const dispatch = useDispatch();

  const handleCreateAccount = async () => {
    await dispatch(createAccount() as any);
  };

  const handleCreateAccountsSequentially = async (numAccounts: number) => {
    for (let i = 0; i < numAccounts; i++) {
      setTimeout(() => {
        handleCreateAccount();
      }, i * 500);
    }
  };

  const handleCreateExcel = async () => {
    const response = await fetch(
      "https://localhost:7083/api/CreateListAccount/getdata"
    );
    const data = await response.json();
    console.log(data);

    // Chuyển đổi cấu trúc dữ liệu
    const structuredData = data.map((item) => ({
      id: item.id,
      address: item.address,
      mnemonic: item.mnemonic,
      privateKey: item.privateKey,
    }));

    // Tạo và xuất file Excel
    createExcelFile(structuredData);
  };

  const createExcelFile = (data) => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    const fileName = "accounts.xlsx";
    XLSX.writeFile(wb, fileName);
  };

  const [numAccounts, setNumAccounts] = useState<number>(1);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(e.target.value, 10);
    setNumAccounts(isNaN(inputValue) ? 0 : inputValue);
  };

  return (
    <div>
      <div>
        <label>
          <input
            className="mb-4 p-3 border border-purple-500"
            type="number"
            value={numAccounts}
            onChange={handleInputChange}
          />
        </label>
        <button onClick={() => handleCreateAccountsSequentially(numAccounts)}>
          Create Accounts
        </button>
        <button
          className="p-3 border rounded-lg bg-red-500"
          onClick={() => handleCreateExcel()}
        >
          Export
        </button>
      </div>
    </div>
  );
};

export default YourComponent;
