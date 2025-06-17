import React from 'react';
import { motion } from 'framer-motion';

interface NotificationPopupProps {
  message: string;
  onClose: () => void;
}

const NotificationPopup: React.FC<NotificationPopupProps> = ({ message, onClose }) => {
  return (
    <motion.div
      className="fixed bottom-4 right-4 bg-zora-accent text-zora-primary p-4 rounded-lg shadow-lg flex items-center"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <p className="mr-4">{message}</p>
      <button
        className="text-zora-primary font-bold"
        onClick={onClose}
      >
        ✕
      </button>
    </motion.div>
  );
};

export default NotificationPopup;