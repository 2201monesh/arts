import { useState } from "react";
import "./App.css";
import AppDrawer from "./components/AppDrawer";
import WalletCard from "./components/WalletCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      {/* <AppDrawer /> */}
      <WalletCard />
    </div>
  );
}

export default App;
