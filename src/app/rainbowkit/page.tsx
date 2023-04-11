"use client";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";

import { WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { configureChains, createClient } from "wagmi";
import { polygonMumbai } from "wagmi/chains";

import {
  googleWallet,
  facebookWallet,
  githubWallet,
  discordWallet,
  twitchWallet,
  twitterWallet,
} from "@zerodevapp/wagmi/rainbowkit";

import { connectorsForWallets } from "@rainbow-me/rainbowkit";

import { ConnectButton } from "@rainbow-me/rainbowkit";

const YourApp = () => {
  return <ConnectButton />;
};

function RainbowKitExample() {
  const defaultProjectId = `25b9274b-ea7c-49c7-9041-b0eaa536ddd4`;
  const connectors = connectorsForWallets([
    {
      groupName: "Social",
      wallets: [
        googleWallet({
          options: { projectId: defaultProjectId },
        }),
        facebookWallet({
          options: { projectId: defaultProjectId },
        }),
        githubWallet({ options: { projectId: defaultProjectId } }),
        discordWallet({ options: { projectId: defaultProjectId } }),
        twitchWallet({ options: { projectId: defaultProjectId } }),
        twitterWallet({ options: { projectId: defaultProjectId } }),
      ],
    },
  ]);

  const { chains, provider, webSocketProvider } = configureChains(
    [polygonMumbai],
    [publicProvider()]
  );
  const client = createClient({
    autoConnect: false,
    connectors,
    provider,
    webSocketProvider,
  });

  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider chains={chains} modalSize={"compact"}>
        <YourApp />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default RainbowKitExample;
