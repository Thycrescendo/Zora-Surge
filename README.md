# ZoraSurge

**ZoraSurge** is an AI-powered web application designed to enhance the creator and trader experience on **Zora's Coins Protocol**. Leveraging the Zora Coins SDK, it monitors **Base blockchain** transactions in real-time to detect surging coins, delivering instant browser and in-app notifications when coins experience significant market cap or volume increases (greater than 10%).

With newly added **interactive features** like on-chain trading, customizable alerts, and X (Twitter) sharing, ZoraSurge has evolved from a read-only tracker into a fully engaging trading platform.

---

## Features

* **Real-Time Surge Alerts**
  Uses `getCoinsTopGainers` and `getCoinsTopVolume24h` to alert users when coins surge by 10%+ in market cap or volume.

* **💱 On-Chain Trading**
  Instantly trade coins using `tradeCoin` with WalletConnect and MetaMask support.

* **⚙️ Customizable Alerts**
  Users can define surge thresholds and filter coins via an intuitive settings dashboard.

* **📤 X Sharing (Twitter)**
  Share surging coin alerts with a click — or enable auto-sharing to X (formerly Twitter).

* **📊 Interactive Dashboard**
  Visualize market data trends using Chart.js, and filter coins by cap, volume, or percentage change.

* **🖤 Responsive UI**
  A modern dark-themed interface using **Framer Motion** animations — optimized for both desktop and mobile.

---

## Installation

### Prerequisites

* [Node.js](https://nodejs.org/) (v18 or higher)
* `npm`
* Zora API Key (from [Zora Developer Settings](https://zora.co/developers))
* X (Twitter) API credentials
* WalletConnect or MetaMask wallet for trading functionality

---

### Steps

#### 1. Clone the Repository

```bash
git clone https://github.com/thycrescendo/zorasurge.git
cd zorasurge
```

#### 2. Install Dependencies

```bash
npm install --legacy-peer-deps
npm install twitter-api-v2 wagmi viem walletconnect chart.js
```

#### 3. Configure Environment

Create a `.env` file in the root of the project:

```env
REACT_APP_ZORA_API_KEY=your-zora-api-key
REACT_APP_X_API_KEY=your-x-api-key
REACT_APP_X_API_SECRET=your-x-api-secret
REACT_APP_X_ACCESS_TOKEN=your-x-access-token
REACT_APP_X_ACCESS_SECRET=your-x-access-secret
```

#### 4. Run the App

```bash
npm start
```

---

## Usage

* **Trade Coins**:
  Click the “Trade” button on any coin card to open a modal and execute buy/sell orders.

* **Customize Alerts**:
  Go to the settings panel to set custom thresholds and coin filters.

* **Share to X (Twitter)**:
  Click “Share to X” on alerts to post directly, or enable auto-share.

* **Explore Coin Data**:
  Use the dashboard toolbar to sort, filter, and view trend charts.

---

## Future Improvements

* **📱 Mobile Push Notifications**
  Integrate Firebase Cloud Messaging (FCM) for iOS/Android alert delivery.

* **🧠 AI-Powered Predictions**
  Use TensorFlow\.js to forecast future surges based on historical patterns.

* **⚡ Vite Migration**
  Transition to Vite for faster builds and smoother dependency management.

* **🗄 Backend Caching**
  Add a Node.js/Express backend for data caching and deeper analytics.

---

## Contributing

We welcome contributions!

1. Fork the repository
2. Create a feature branch
3. Submit a pull request with a detailed description of your changes

---

## License

This project is licensed under the **MIT License**.
See the [LICENSE](./LICENSE) file for full details.
