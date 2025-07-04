import React, { useState } from 'react';
import { useAccount, usePublicClient } from 'wagmi';
import { tradeCoinCall, simulateBuy } from '@zoralabs/coins-sdk';
import { motion } from 'framer-motion';
import { parseEther } from 'viem';

interface TradeModalProps {
  coin: { address?: string; name?: string; symbol?: string };
  onClose: () => void;
}

interface PreviewResult {
  orderSize: bigint;
  amountOut: bigint;
}

const TradeModal: React.FC<TradeModalProps> = ({ coin, onClose }) => {
  const { address } = useAccount();
  const publicClient = usePublicClient({ chainId: 8453 }); // Base mainnet
  const [amount, setAmount] = useState('');
  const [preview, setPreview] = useState<PreviewResult | null>(null);

  const handlePreview = async () => {
    if (!coin.address || !publicClient) return;
    try {
      const result = await simulateBuy({
        target: coin.address as `0x${string}`,
        requestedOrderSize: parseEther(amount),
        publicClient,
      });
      setPreview(result);
    } catch (error) {
      console.error('Preview error:', error);
    }
  };

  const { write } = useContractWrite({
    address: coin.address as `0x${string}`,
    functionName: 'tradeCoin',
    args: [parseEther(amount), address, 'zorasurge_referrer'],
  });

  return (
    <motion.div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-zora-primary p-6 rounded-lg">
        <h2 className="text-2xl text-zora-accent">Trade {coin.name || 'Unknown'} ({coin.symbol || 'N/A'})</h2>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount to buy (ETH)"
          className="w-full p-2 mt-2 bg-gray-800 text-white rounded"
        />
        <button onClick={handlePreview} className="mt-2 bg-zora-accent text-zora-primary p-2 rounded">
          Preview Trade
        </button>
        {preview && <p>Estimated Amount Out: {Number(preview.amountOut) / 1e18} tokens</p>}
        <button
          onClick={() => write()}
          disabled={!coin.address || !amount}
          className="mt-2 bg-green-500 text-white p-2 rounded"
        >
          Confirm Trade
        </button>
        <button onClick={onClose} className="mt-2 text-gray-400">Close</button>
      </div>
    </motion.div>
  );
};

export default TradeModal;