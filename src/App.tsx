import React ,{useEffect} from 'react';
import Navbar from './components/Navbar'
import Home from './pages/Marketplace'
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import styles from './App.module.css'

function getLibrary(provider:any ) {
  return new Web3(provider)
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Navbar/>
    </Web3ReactProvider>
  );
}

export default App;
