import { useState } from "react";
import "./App.css";
import AppDrawer from "./components/AppDrawer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <AppDrawer />
    </div>
  );
}

export default App;
