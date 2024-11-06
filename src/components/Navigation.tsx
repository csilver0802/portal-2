import React from 'react';
import { Dog } from 'lucide-react';

export const Navigation = ({ 
  connected, 
  account, 
  onConnect 
}: { 
  connected: boolean;
  account: string;
  onConnect: () => void;
}) => {
  return (
    <nav className="bg-[#1a2332] border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Dog className="w-8 h-8 text-orange-500" />
            <span className="ml-2 text-xl font-bold">KITA INU</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onConnect}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-colors"
            >
              {connected ? (
                account.slice(0, 6) + '...' + account.slice(-4)
              ) : (
                'Connect Wallet'
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};