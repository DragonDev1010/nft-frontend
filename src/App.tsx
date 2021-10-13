import React ,{useEffect} from 'react';
import Navbar from './components/Navbar'
import Home from './pages/Marketplace'
import Wallet from './components/Wallet'
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import styles from './App.module.css'
import Sidebar from './components/Sidebar';

function getLibrary(provider:any ) {
  return new Web3(provider)
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Sidebar />
      <Navbar/>
      
    </Web3ReactProvider>
  );
}

export default App;
