import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { WagmiConfig, createConfig } from "wagmi";
import { polygonZkEvmTestnet } from "wagmi/chains";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultConfig,
} from "connectkit";

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    infuraId: import.meta.env.VITE_INFURA_KEY, // or infuraId
    walletConnectProjectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID,

    // Required
    appName: "Hacked2.0",

    // Optional
    appDescription: "Substainable Development",
    appUrl: "https://family.co",
    appIcon: "https://i.pinimg.com/736x/64/d6/0f/64d60f03aff21e923652c55a686cc421.jpg",

    chains: [polygonZkEvmTestnet],
  })
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WagmiConfig config={config}>
      <ConnectKitProvider theme="retro" >
        <App />
      </ConnectKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
