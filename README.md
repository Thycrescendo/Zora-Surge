ZoraSurge
ZoraSurge is an AI-powered web application built for the Wavehack buildathon, designed to enhance the creator and trader experience on Zora's Coins Protocol. By leveraging the Zora Coins SDK, it monitors Base blockchain transactions in real-time to detect surging coins, delivering instant browser and in-app notifications when coins experience significant market cap or volume increases (>10%). With a sleek, responsive interface crafted using React, TypeScript, Tailwind CSS, and Framer Motion animations, ZoraSurge empowers users to seize early investment opportunities, making trading on Zora more informed and engaging.
Features
Real-Time Surge Alerts: Monitors Base transactions using Zora Coins SDK’s getCoinsTopGainers and getCoinsTopVolume24h to notify users of coins with >10% market cap changes.
Browser Notifications: Sends browser-based alerts with coin details (name, symbol, market cap, 24h volume) when surges occur.
Responsive UI: Modern, dark-themed dashboard with animated coin cards and notification pop-ups, optimized for desktop and mobile.
Zora SDK Integration: Fetches and displays coin data (name, symbol, market cap, 24h volume, percentage change) directly from Zora’s Coins Protocol.
Trader-Centric Design: Simplifies market trend analysis, enabling traders and creators to act swiftly on high-potential opportunities.
Importance to the Zora Ecosystem
ZoraSurge strengthens the Base chain by driving trading activity and increasing visibility for Zora’s creators and coins. It showcases the power of Zora’s Coins SDK, demonstrating how developers can build innovative tools to enhance the ecosystem. By providing actionable insights, it fosters greater user engagement, encouraging adoption of Zora’s technology within the Web3 community.
Technologies Used
Frontend: React, TypeScript, Tailwind CSS, Framer Motion
Blockchain: Zora Coins SDK (@zoralabs/coins-sdk), Viem
APIs: Browser Notification API
Build Tool: Create React App, npm
Installation
Prerequisites
Node.js (v18 or higher)
npm
A valid Zora API key (obtain from Zora Developer Settings)
Steps
Clone the Repository:
bash
git clone https://github.com/your-username/zorasurge.git
cd zorasurge
Install Dependencies:
Due to dependency conflicts with react-scripts@5.0.1 and viem, use --legacy-peer-deps:
bash
npm install --legacy-peer-deps
Configure Zora API Key:
Open src/App.tsx.
Replace 'your-api-key-here' with your actual Zora API key:
tsx
setApiKey('your-zora-api-key');
Set Up Tailwind CSS:
Ensure tailwind.config.js and src/index.css are configured as below:
javascript
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'zora-primary': '#1a1a1a',
        'zora-accent': '#00ffbd',
      },
    },
  },
  plugins: [],
};
css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  background-color: #1a1a1a;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
}
Run the App:
bash
npm start
The app will run at http://localhost:3000.
Project Structure
zorasurge/
├── src/
│   ├── components/
│   │   ├── CoinCard.tsx        # Displays individual coin details
│   │   ├── NotificationPopup.tsx # In-app notification component
│   ├── App.tsx                # Main app component with SDK integration
│   ├── index.tsx             # Entry point
│   ├── index.css             # Tailwind CSS styles
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Project dependencies and scripts
├── README.md                 # This file
Usage
Launch the App:
Open http://localhost:3000 in a browser after running npm start.
Grant permission for browser notifications when prompted.
View Surge Alerts:
The dashboard displays top gainers and high-volume coins fetched every 60 seconds.
Receive browser and in-app notifications for coins with >10% market cap changes.
Interact with Coin Data:
Hover over coin cards to see animated effects.
Click the “✕” button on in-app notifications to dismiss them.
Challenges Faced
Dependency Conflicts: Resolved issues between react-scripts@5.0.1 (requiring TypeScript 4.x) and viem (needing TypeScript >=5.0.4) using --legacy-peer-deps.
Notification API Typing: Fixed TypeScript errors for the browser’s Notification API by renaming the custom component to NotificationPopup and using window.Notification.
SDK Integration: Ensured robust error handling and periodic data fetching with the Zora Coins SDK.
Future Improvements
Wave 1: Personalization and Cross-Platform Notifications
Add customizable surge thresholds and coin filters.
Integrate X API to post alerts to X, increasing community engagement.
Implement Firebase Cloud Messaging for mobile push notifications.
Introduce a “Surge History” tab with charts using Chart.js.
Wave 2: Trading and Scalability
Enable on-chain trading via Zora Coins SDK’s tradeCoin function with WalletConnect.
Develop AI-driven surge predictions using TensorFlow.js or a backend model.
Migrate to Vite for faster builds and better dependency management.
Build a Node.js/Express backend with MongoDB for data caching and analytics.
Contributing
Contributions are welcome! To contribute:
Fork the repository.
Create a feature branch (git checkout -b feature/your-feature).
Commit changes (git commit -m 'Add your feature').
Push to the branch (git push origin feature/your-feature).
Open a pull request.
Please ensure code follows TypeScript conventions and includes tests where applicable.
License
This project is licensed under the MIT License. See the LICENSE file for details.
Acknowledgments
Built for the Wavehack Buildathon to advance Zora’s Coins Protocol.
Powered by Zora Coins SDK and the Base blockchain.
Inspired by the need to empower Zora’s creators and traders with real-time insights.
Contact
For questions or feedback, reach out via 
X
 or open an issue on GitHub.
Note: Replace your-username and your-zora-api-key with your actual GitHub username and Zora API key. If you haven’t created a GitHub repository yet, initialize one with git init and push the code before linking it in the README. Let me know if you need help with GitHub setup or additional README sections!