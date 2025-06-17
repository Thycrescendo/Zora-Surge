import React from 'react';
import { motion } from 'framer-motion';

interface Coin {
  name?: string;
  symbol?: string;
  marketCap?: string;
  volume24h?: string;
  marketCapDelta24h?: string;
}

interface CoinCardProps {
  coin: Coin;
}

const CoinCard: React.FC<CoinCardProps> = ({ coin }) => {
  return (
    <motion.div
      className="bg-gray-800 p-4 rounded-lg shadow-lg"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
    >
      <h2 className="text-xl font-semibold text-zora-accent">{coin.name || 'Unknown'}</h2>
      <p className="text-gray-400">Symbol: {coin.symbol || 'N/A'}</p>
      <p className="text-gray-400">Market Cap: {coin.marketCap || 'N/A'}</p>
      <p className="text-gray-400">24h Volume: {coin.volume24h || 'N/A'}</p>
      <p className={`text-${parseFloat(coin.marketCapDelta24h || '0') > 0 ? 'green' : 'red'}-400`}>
        24h Change: {coin.marketCapDelta24h ? `${parseFloat(coin.marketCapDelta24h).toFixed(2)}%` : 'N/A'}
      </p>
    </motion.div>
  );
};

export default CoinCard;