import React, { useEffect, useState } from 'react';
import { setApiKey, getCoinsTopGainers, getCoinsTopVolume24h } from '@zoralabs/coins-sdk';
import { motion, AnimatePresence } from 'framer-motion';
import CoinCard from './components/CoinCard';
import NotificationPopup from './components/NotificationPopup'; // Renamed import

interface Coin {
  id?: string;
  name?: string;
  symbol?: string;
  marketCap?: string;
  volume24h?: string;
  marketCapDelta24h?: string;
  address?: string;
}

const App: React.FC = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [notifications, setNotifications] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set Zora API key (replace with your actual API key)
    setApiKey('your-api-key-here');

    // Request notification permission if supported
    if (typeof window !== 'undefined' && 'Notification' in window) {
      if (window.Notification.permission !== 'granted') {
        window.Notification.requestPermission();
      }
    }

    // Fetch surging coins
    const fetchSurgingCoins = async () => {
      setIsLoading(true);
      try {
        const [topGainersResponse, topVolumeResponse] = await Promise.all([
          getCoinsTopGainers({ count: 10 }),
          getCoinsTopVolume24h({ count: 10 }),
        ]);

        const topGainers = topGainersResponse.data?.exploreList?.edges?.map((edge: any) => edge.node) || [];
        const topVolume = topVolumeResponse.data?.exploreList?.edges?.map((edge: any) => edge.node) || [];

        // Combine and deduplicate coins
        const combinedCoins = [...topGainers, ...topVolume].reduce((acc, coin) => {
          if (!acc.find((c: Coin) => c.address === coin.address)) {
            acc.push(coin);
          }
          return acc;
        }, [] as Coin[]);

        // Check for surges (e.g., market cap change > 10%)
        combinedCoins.forEach((coin: Coin) => {
          const change = parseFloat(coin.marketCapDelta24h || '0');
          if (change > 10 && coin.name && coin.symbol) {
            const message = `${coin.name} (${coin.symbol}) surged by ${change.toFixed(2)}%!`;
            setNotifications((prev) => [...prev, message]);
            if (
              typeof window !== 'undefined' &&
              'Notification' in window &&
              window.Notification.permission === 'granted'
            ) {
              new window.Notification(message, {
                body: `Market Cap: ${coin.marketCap} | 24h Volume: ${coin.volume24h}`,
              });
            }
          }
        });

        setCoins(combinedCoins);
      } catch (error) {
        console.error('Error fetching coins:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSurgingCoins();
    const interval = setInterval(fetchSurgingCoins, 60000); // Refresh every 60 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-zora-primary p-4">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-zora-accent">Zora-surge</h1>
        <p className="text-lg text-gray-400">Real-time alerts for surging Zora coins</p>
      </motion.header>

      <div className="max-w-4xl mx-auto">
        {isLoading ? (
          <div className="text-center text-gray-400">Loading...</div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {coins.map((coin) => (
              <CoinCard key={coin.address} coin={coin} />
            ))}
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {notifications.map((message, index) => (
          <NotificationPopup
            key={index}
            message={message}
            onClose={() => setNotifications((prev) => prev.filter((_, i) => i !== index))}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default App;