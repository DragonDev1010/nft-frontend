import React ,{useEffect} from 'react';
import BootstrapNavbar from './components/Navbar'
import Home from './pages/Home'
import Wallet from './components/Wallet'
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'

function getLibrary(provider:any ) {
  return new Web3(provider)
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <BootstrapNavbar/>
    </Web3ReactProvider>
  );
}

export default App;
