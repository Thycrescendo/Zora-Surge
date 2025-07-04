import React, { useEffect, useState } from 'react';
import { setApiKey, getCoinsTopGainers, getCoinsTopVolume24h } from '@zoralabs/coins-sdk';
import { motion, AnimatePresence } from 'framer-motion';
import CoinCard from './components/CoinCard';
import NotificationPopup from './components/NotificationPopup';
import TradeModal from './components/TradeModal';
import Settings from './components/Settings';
import DashboardToolbar from './components/DashboardToolbar';

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
  const [selectedCoin, setSelectedCoin] = useState<Coin | null>(null);
  const [settings, setSettings] = useState({ threshold: 10, selectedCoins: [] as string[] });
  const [sortBy, setSortBy] = useState('marketCap');

  useEffect(() => {
    setApiKey('your-zora-api-key');

    if (typeof window !== 'undefined' && 'Notification' in window) {
      if (window.Notification.permission !== 'granted') {
        window.Notification.requestPermission();
      }
    }

    const fetchSurgingCoins = async () => {
      setIsLoading(true);
      try {
        const coinsToFetch = settings.selectedCoins.length ? settings.selectedCoins : ['all'];
        const [topGainersResponse, topVolumeResponse] = await Promise.all([
          getCoinsTopGainers({ count: 10 }),
          getCoinsTopVolume24h({ count: 10 }),
        ]);

        const combinedCoins = [...topGainersResponse.data?.exploreList?.edges?.map((edge: any) => edge.node) || [], ...topVolumeResponse.data?.exploreList?.edges?.map((edge: any) => edge.node) || []].filter(
          (coin) => coinsToFetch.includes('all') || coinsToFetch.includes(coin.address)
        );

        combinedCoins.forEach((coin: Coin) => {
          const change = parseFloat(coin.marketCapDelta24h || '0');
          if (change > settings.threshold && coin.name && coin.symbol) {
            const message = `${coin.name} (${coin.symbol}) surged by ${change.toFixed(2)}%!`;
            setNotifications((prev) => [...prev, message]);
            if (typeof window !== 'undefined' && 'Notification' in window && window.Notification.permission === 'granted') {
              new window.Notification(message, {
                body: `Market Cap: ${coin.marketCap} | 24h Volume: ${coin.volume24h}`,
              });
            }
          }
        });

        setCoins(combinedCoins.sort((a, b) => parseFloat(b[sortBy] || '0') - parseFloat(a[sortBy] || '0')));
      } catch (error) {
        console.error('Error fetching coins:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSurgingCoins();
    const interval = setInterval(fetchSurgingCoins, 60000);

    return () => clearInterval(interval);
  }, [settings, sortBy]);

  return (
    <div className="min-h-screen bg-zora-primary p-4">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-zora-accent">ZoraSurge</h1>
        <p className="text-lg text-gray-400">Real-time alerts for surging Zora coins</p>
        <button onClick={() => setSelectedCoin(null)} className="mt-2 text-zora-accent">Settings</button>
      </motion.header>

      <Settings setSettings={setSettings} />
      <DashboardToolbar setSortBy={setSortBy} />

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
              <CoinCard key={coin.address} coin={coin} onTrade={() => setSelectedCoin(coin)} />
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
        {selectedCoin && <TradeModal coin={selectedCoin} onClose={() => setSelectedCoin(null)} />}
      </AnimatePresence>
    </div>
  );
};

export default App;