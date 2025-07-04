import React from 'react';
import { motion } from 'framer-motion';
import { TwitterApi } from 'twitter-api-v2';

interface NotificationPopupProps {
  message: string;
  onClose: () => void;
}

const NotificationPopup: React.FC<NotificationPopupProps> = ({ message, onClose }) => {
  const shareToX = async () => {
    try {
      const client = new TwitterApi({
        appKey: process.env.REACT_APP_X_API_KEY!,
        appSecret: process.env.REACT_APP_X_API_SECRET!,
        accessToken: process.env.REACT_APP_X_ACCESS_TOKEN!,
        accessSecret: process.env.REACT_APP_X_ACCESS_SECRET!,
      });
      await client.v2.tweet(`${message} Check it on ZoraSurge! #ZoraCoins`);
    } catch (error) {
      console.error('Error sharing to X:', error);
    }
  };

  return (
    <motion.div
      className="fixed bottom-4 right-4 bg-zora-accent text-zora-primary p-4 rounded-lg shadow-lg flex items-center"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <p className="mr-4">{message}</p>
      <button onClick={shareToX} className="mr-2 text-zora-primary">Share to X</button>
      <button onClick={onClose} className="text-zora-primary font-bold">✕</button>
    </motion.div>
  );
};

export default NotificationPopup;