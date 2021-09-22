import React from 'react';
import Navbar from './components/Navbar'
import Home from './pages/Home'
// import Navigation from './Navigation';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Navigation/> */}
      <Home/>
    </div>
  );
}

export default App;
