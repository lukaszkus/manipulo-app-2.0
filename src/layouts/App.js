import React, { useState } from 'react';
import './App.scss';
import Welcome from '../layouts/welcome/Welcome';
// import Dashboard from './Dashboard/Dashboard';

function App() {
  const [change, setChange] = useState(false);

  const handleChange = () => {
    setChange(true);
  }

  return (
    <>
      {/* {change ? <Dashboard /> : <Welcome click={ handleChange } /> } */}
      {change ? <h1>1</h1> : <Welcome click={ handleChange } /> }
    </>
  );
}

export default App;