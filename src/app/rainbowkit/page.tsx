"use client";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";

import { WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { configureChains, createClient } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { enhanceWalletWithAAConnector } from "@zerodevapp/wagmi/rainbowkit";
import {
  metaMaskWallet,
  rainbowWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
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

function RainbowKitBTN() {
  const defaultProjectId = `25b9274b-ea7c-49c7-9041-b0eaa536ddd4`;

  const { chains, provider, webSocketProvider } = configureChains(
    [polygonMumbai],
    [publicProvider()]
  );

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
    {
      groupName: "EOA Wrapped with AA",
      wallets: [
        enhanceWalletWithAAConnector(metaMaskWallet({ chains }), {
          projectId: defaultProjectId,
        }),
      ],
    },
    {
      groupName: "EOA",
      wallets: [rainbowWallet({ chains })],
    },
  ]);

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

export default RainbowKitBTN;
