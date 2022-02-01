import React, { useState } from "react";
import "./App.scss";
import Welcome from "../layouts/welcome/Welcome";
import Dashboard from "./dashboard/Dashboard";

function App() {
  const [change, setChange] = useState(false);

  const handleChange = () => {
    setChange(true);
  };

  return (
    <>{change ? <Dashboard /> : <Welcome handleChange={handleChange} />}</>
  );
}

export default App;
