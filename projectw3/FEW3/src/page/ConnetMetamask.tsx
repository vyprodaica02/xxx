/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ethers } from "ethers";

const ConnetMetamask = () => {
  const handleOpenMetamask = async () => {
    try {
      if (window.ethereum) {
        const provider: any = new ethers.providers.Web3Provider(
          window.ethereum
        );

        await window.ethereum.request({ method: "eth_requestAccounts" });

        const signer = provider.getSigner();
        const address = await signer.getAddress();

        console.log(`MetaMask opened for address: ${address}`);
      } else {
        console.error(
          "MetaMask not detected. Please install MetaMask and try again."
        );
        alert("Please install MetaMask to use this feature.");
      }
    } catch (error) {
      console.error("Error opening MetaMask:", error);
    }
  };

  return (
    <div>
      <div>
        <button
          className="p-2 border rounded-md bg-red-700"
          onClick={handleOpenMetamask}
        >
          Open MetaMask
        </button>
      </div>
    </div>
  );
};

export default ConnetMetamask;
