import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-black to-blue-950">
        <div className="container mx-auto px-4 py-24">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-center text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-blue-400 py-2">
              EVM Accountibility
            </h1>
            <p className="mt-4 text-xl font-semibold text-center">
              Accountibility Booster Powered by the EVM Sidechain
            </p>
            <Button className="mt-8">Get Started</Button>
          </div>
        </div>
      </div>
      <Button>Test</Button>
    </div>
  );
}

export default App;
