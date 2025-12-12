import { useState } from "react";
import "./App.css";
import AppDrawer from "./components/AppDrawer";
import WalletCard from "./components/WalletCard";
import GradientCards from "./components/GradientCards";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      {/* <AppDrawer /> */}
      <WalletCard />
      {/* <div className="grid grid-cols-3 gap-4">
        <GradientCards gradient={"from-emerald-200 to-emerald-500"} />
        <GradientCards gradient={"from-teal-200 via-teal-50 to-teal-300"} />
        <GradientCards gradient={"from-[#ec4899] via-[#f43f5e] to-[#ef4444]"} />
        <GradientCards gradient={"from-neutral-200 to-neutral-500"} />
        <GradientCards gradient={"from-[#22c55e] via-[#4ade80] to-[#86efac]"} />
        <GradientCards gradient={"from-blue-200 to-blue-600"} />
      </div> */}
    </div>
  );
}

export default App;
