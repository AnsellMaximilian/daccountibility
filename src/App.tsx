import { useEffect, useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import { ethers } from "ethers";

function App() {
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);

  const [signer, setSigner] = useState<ethers.JsonRpcSigner | null>(null);

  const [accountAddress, setAccountAddress] = useState<string | null>(null);
  useEffect(() => {
    (async () => {})();
  }, []);

  const connectToMetamask = async () => {
    if (window.ethereum == null) {
      console.log("MetaMask not installed; using read-only defaults");
    } else {
      const provider = new ethers.BrowserProvider(window.ethereum);
      setProvider(provider);

      const signer = await provider.getSigner();
      setSigner(signer);
      setAccountAddress(await signer.getAddress());
    }
  };
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="bg-gradient-to-b from-black to-blue-950">
        <div className="container mx-auto px-4 py-24">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-center text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-400 via-blue-50 to-blue-400 py-2">
              Daccountability
            </h1>
            <p className="mt-4 text-xl font-semibold text-center">
              Decentralized Accountability Booster Powered by the EVM Sidechain
            </p>
            <Button
              className="mt-8"
              onClick={connectToMetamask}
              disabled={!!accountAddress}
            >
              {accountAddress ? "Connected" : "Connect to Metamask"}
            </Button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        {accountAddress ? (
          <div className="text-center">
            <div className="text-4xl font-semibold">Connected to Metamask</div>
            <div className="mt-2">{accountAddress}</div>
          </div>
        ) : (
          <div className="text-center">
            <p className="">
              Connect to Metamask to start using Daccountability!
            </p>
            <h2 className="text-4xl font-semibold">Daccountability Features</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
