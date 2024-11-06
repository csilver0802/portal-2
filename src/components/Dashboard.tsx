import React from 'react';
import { Flame, History, DollarSign } from 'lucide-react';

export const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Your Dashboard</h2>
      
      <div className="grid gap-4">
        <div className="bg-[#1a2332] p-6 rounded-xl">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-sm text-gray-400 mb-2">Total KITA Burned Through Portal</h3>
              <p className="text-2xl font-bold">0</p>
              <p className="text-sm text-gray-400">$0.00 USD</p>
            </div>
            <div className="p-3 bg-blue-500/10 rounded-lg">
              <Flame className="w-6 h-6 text-blue-500" />
            </div>
          </div>
        </div>

        <div className="bg-[#1a2332] p-6 rounded-xl">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-sm text-gray-400 mb-2">Last 24h KITA Burned</h3>
              <p className="text-2xl font-bold">0</p>
              <p className="text-sm text-gray-400">$0.00 USD</p>
            </div>
            <div className="p-3 bg-green-500/10 rounded-lg">
              <History className="w-6 h-6 text-green-500" />
            </div>
          </div>
        </div>

        <div className="bg-[#1a2332] p-6 rounded-xl">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-sm text-gray-400 mb-2">Lifetime KITA Burned</h3>
              <p className="text-2xl font-bold">0</p>
              <p className="text-sm text-gray-400">$0.00 USD</p>
            </div>
            <div className="p-3 bg-orange-500/10 rounded-lg">
              <DollarSign className="w-6 h-6 text-orange-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};