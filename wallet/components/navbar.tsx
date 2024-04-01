"use client";
import {
  WalletModal,
  WalletModalButton,
} from "@solana/wallet-adapter-react-ui";
import React from "react";

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto flex justify-between m-4">
      <div>Solana</div>
      <div>Connect Wallet</div>
      <WalletModalButton />
    </div>
  );
};

export default Navbar;
