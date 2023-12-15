/* eslint-disable @typescript-eslint/no-explicit-any */
// YourComponent.tsx
import { useDispatch, useSelector } from "react-redux";
import { createlstAcc } from "../Data/createAccount";

const YourComponent = () => {
  const dispatch = useDispatch();
  const lstAcc = useSelector((state: any) => state.listUser.lstAcc);

  const handleCreateAccounts = (numAccounts: number) => {
    dispatch(createlstAcc(numAccounts));
  };

  return (
    <div>
      <button onClick={() => handleCreateAccounts(5)}>Create Accounts</button>
      <ul>
        {lstAcc.map((account: any) => (
          <li key={account.address}>{account.address}</li>
        ))}
      </ul>
    </div>
  );
};

export default YourComponent;
