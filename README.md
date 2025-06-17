Here is your content formatted as a polished `README.md` file for **ZoraSurge**:

````markdown
# ZoraSurge

**ZoraSurge** is an AI-powered web application built for the **Wavehack Buildathon**, designed to enhance the creator and trader experience on **Zora's Coins Protocol**. Leveraging the Zora Coins SDK, it monitors **Base blockchain transactions** in real-time to detect surging coins, delivering instant browser and in-app notifications when coins experience significant market cap or volume increases (>10%).

With a sleek, responsive interface built using **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, ZoraSurge empowers users to seize early investment opportunities, making trading on Zora more informed and engaging.

---

## 🔥 Features

- **Real-Time Surge Alerts**  
  Detects coins with >10% market cap or volume changes using:
  - `getCoinsTopGainers()`
  - `getCoinsTopVolume24h()`

- **Browser Notifications**  
  Sends alerts with:
  - Name
  - Symbol
  - Market cap
  - 24h volume

- **Responsive UI**  
  Dark-themed dashboard with animated coin cards and popup notifications. Optimized for desktop and mobile.

- **Zora SDK Integration**  
  Displays live data from Zora’s Coins Protocol.

- **Trader-Centric Design**  
  Built for creators and traders to act swiftly on trends.

---

## 🧠 Importance to the Zora Ecosystem

ZoraSurge boosts visibility and trading activity on the **Base chain**, showcasing the power of the **Zora Coins SDK**. It encourages developers to build on Zora, while empowering traders with real-time, actionable insights — fostering ecosystem growth and user engagement.

---

## 🛠 Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS, Framer Motion  
- **Blockchain**: Zora Coins SDK (`@zoralabs/coins-sdk`), Viem  
- **APIs**: Browser Notification API  
- **Build Tool**: Create React App, npm

---

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher)  
- npm  
- A valid **Zora API key** (obtain from Zora Developer Settings)

### Steps

#### 1. Clone the Repository

```bash
git clone https://github.com/your-username/zorasurge.git
cd zorasurge
````

#### 2. Install Dependencies

```bash
npm install --legacy-peer-deps
```

> Note: Required due to conflicts between `react-scripts@5.0.1` and Viem.

#### 3. Configure Zora API Key

Edit `src/App.tsx`:

```tsx
setApiKey('your-zora-api-key');
```

#### 4. Set Up Tailwind CSS

**tailwind.config.js**

```js
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
```

**src/index.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  background-color: #1a1a1a;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
}
```

#### 5. Run the App

```bash
npm start
```

> Access the app at: [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
zorasurge/
├── src/
│   ├── components/
│   │   ├── CoinCard.tsx            # Displays individual coin details
│   │   ├── NotificationPopup.tsx   # In-app notification component
│   ├── App.tsx                     # Main app component with SDK integration
│   ├── index.tsx                   # Entry point
│   ├── index.css                   # Tailwind CSS styles
├── tailwind.config.js              # Tailwind configuration
├── tsconfig.json                   # TypeScript configuration
├── package.json                    # Project dependencies and scripts
├── README.md                       # This file
```

---

## 🚀 Usage

* **Launch the App**: Open [http://localhost:3000](http://localhost:3000)
* **Grant Notification Permission** when prompted

### 🔔 View Surge Alerts

* The dashboard refreshes every 60 seconds
* Displays coins with >10% market cap or volume changes
* Hover for animations, click “✕” to dismiss in-app notifications

---

## 🧩 Challenges Faced

* **Dependency Conflicts**: Between `react-scripts` and Viem (`--legacy-peer-deps` used)
* **Browser Notification Typing**: Handled with `NotificationPopup` component and `window.Notification`
* **SDK Integration**: Robust error handling and periodic fetching

---

## 🚧 Future Improvements

### Wave 1: Personalization and Cross-Platform

* Custom surge thresholds
* Coin watchlists and filters
* Integration with **X API** (formerly Twitter)
* Firebase Cloud Messaging
* “Surge History” with charts via Chart.js

### Wave 2: Trading and AI

* On-chain trading using `tradeCoin()` and WalletConnect
* AI-driven surge predictions (TensorFlow\.js or backend ML)
* Migrate to **Vite**
* Backend server with Node.js, Express, MongoDB

---

## 🤝 Contributing

We welcome contributions!

1. **Fork** the repo
2. Create your feature branch:

   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:

   ```bash
   git commit -m "Add your feature"
   ```
4. Push to GitHub:

   ```bash
   git push origin feature/your-feature
   ```
5. Open a **Pull Request**

> Please follow TypeScript best practices and include tests where applicable.

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.

---

## 🙌 Acknowledgments

* Built for the **Wavehack Buildathon** to advance Zora’s Coins Protocol
* Powered by **Zora Coins SDK** and the **Base blockchain**
* Inspired by the need to empower creators and traders with real-time insights

---

## 📬 Contact

For questions, issues, or feature requests:
→ Reach out via [X (Twitter)](https://x.com)
→ Or open an issue in the [GitHub repository](https://github.com/your-username/zorasurge)

---

> 📝 **Note**: Replace `your-username` and `your-zora-api-key` with your actual GitHub username and API key.

```

Let me know if you want help creating a `LICENSE` file, `CONTRIBUTING.md`, project banner, or deploying to Vercel or Netlify!
```
