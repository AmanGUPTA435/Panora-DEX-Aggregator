import React from "react";
// import { useRouter } from "next/navigation";
import { WalletManager } from "../utils/connect_wallet";
import { useState } from "react";

const walletManager = new WalletManager();

const Staking_page = () => {
  //   const router = useRouter();
  const [isConnected, setIsConnected] = useState<boolean>(
    walletManager.isWalletConnected()
  );
  const isStaked = localStorage.getItem("isStaked") === "true";

  const handleConnectWallet = async () => {
    const connected: boolean = await walletManager.connectWallet();
    // verifyStakeStatus();
    if (connected) {
      console.log("Wallet connected successfully");
      setIsConnected(true);
    } else {
      console.log("Failed to connect to the wallet");
    }
  };

  const handleDisconnectWallet = async () => {
    const connected: boolean = await walletManager.disconnectWallet();
    if (connected) {
      console.log("Failed to disconnect. Try again!");
    } else {
      console.log("Disconnected successfully");
      setIsConnected(false);
    }
  };
};
