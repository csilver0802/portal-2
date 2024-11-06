import React, { useState } from 'react';
import { ethers } from 'ethers';

const KITA_CONTRACT = '0x546638046Ca366375Ec2610ef48F5286b303306c';

const predefinedAmounts = [
  { label: '5.00B', value: '5000000000' },
  { label: '50.00B', value: '50000000000' },
  { label: '100.00B', value: '100000000000' },
  { label: '250.00B', value: '250000000000' },
  { label: '500.00B', value: '500000000000' },
  { label: '1.00T', value: '1000000000000' },
  { label: '5.00T', value: '5000000000000' },
  { label: '10.00T', value: '10000000000000' },
];

export const BurnPortal = ({ connected, onConnect }: { connected: boolean; onConnect: () => void }) => {
  const [amount, setAmount] = useState('0');
  const [balance, setBalance] = useState('0.0');

  const burnTokens = async () => {
    if (!window.ethereum) return;
    
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      
      // Basic ERC20 ABI for burn function
      const abi = [
        "function burn(uint256 amount) public returns (bool)",
        "function balanceOf(address account) public view returns (uint256)"
      ];
      
      const contract = new ethers.Contract(KITA_CONTRACT, abi, signer);
      
      // Convert amount to wei
      const burnAmount = ethers.parseUnits(amount, 9); // Assuming 9 decimals
      
      const tx = await contract.burn(burnAmount);
      await tx.wait();
      
      alert('Tokens burned successfully!');
    } catch (error) {
      console.error('Error burning tokens:', error);
      alert('Error burning tokens. Please try again.');
    }
  };

  return (
    <div className="bg-[#1a2332] rounded-xl p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Burn</h2>
        <div className="flex gap-2">
          <button className="p-2 rounded-lg bg-[#2d3748] hover:bg-[#3a4a63]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="p-4 bg-[#0d1117] rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <span className="text-blue-400">Burn KITA</span>
          <span>Balance: {balance}</span>
        </div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full bg-transparent text-2xl outline-none"
          placeholder="0.0"
        />
      </div>

      <div className="grid grid-cols-4 gap-2">
        {predefinedAmounts.map((preset) => (
          <button
            key={preset.value}
            onClick={() => setAmount(preset.value)}
            className="px-4 py-2 bg-[#2d3748] rounded-lg hover:bg-[#3a4a63] transition-colors"
          >
            {preset.label}
          </button>
        ))}
      </div>

      {connected ? (
        <button
          onClick={burnTokens}
          className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-colors"
        >
          Burn Tokens
        </button>
      ) : (
        <button
          onClick={onConnect}
          className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-colors"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};