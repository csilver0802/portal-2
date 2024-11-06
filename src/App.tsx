import React, { useState, useEffect } from 'react';
import { Flame, History, DollarSign, Wallet } from 'lucide-react';
import { BurnPortal } from './components/BurnPortal';
import { Dashboard } from './components/Dashboard';
import { Navigation } from './components/Navigation';

function App() {
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState('');

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        setConnected(true);
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      <Navigation connected={connected} account={account} onConnect={connectWallet} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 blur-3xl" />
          <div className="relative bg-[url('https://images.unsplash.com/photo-1634704784915-aacf363b021f')] bg-cover bg-center h-48 rounded-xl flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white drop-shadow-lg">Burn Portal</h1>
          </div>
        </div>

        <div className="mt-8 space-y-8">
          <BurnPortal connected={connected} onConnect={connectWallet} />
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;