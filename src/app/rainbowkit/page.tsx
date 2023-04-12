"use client";

import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { rainbowWallet, metaMaskWallet } from "@rainbow-me/rainbowkit/wallets";
import { WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { configureChains, createClient } from "wagmi";
import { mainnet, polygon } from "wagmi/chains";
import { enhanceWalletWithAAConnector } from "@zerodevapp/wagmi/rainbowkit";
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
  return <ConnectButton label="Connect Your Wallet" />;
};

function RainbowKitBTN() {
  const defaultProjectId = `25b9274b-ea7c-49c7-9041-b0eaa536ddd4`;

  const { chains, provider, webSocketProvider } = configureChains(
    [mainnet, polygon],
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
      <RainbowKitProvider
        chains={chains}
        modalSize={"compact"}
        theme={darkTheme({
          ...darkTheme.accentColors.purple,
          // accentColor: "#7b3fe4",
          accentColorForeground: "white",
          borderRadius: "medium",
          overlayBlur: "small",
        })}
      >
        <YourApp />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default RainbowKitBTN;
