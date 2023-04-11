"use client";

import {
  GoogleSocialWalletConnector,
  FacebookSocialWalletConnector,
  GithubSocialWalletConnector,
  DiscordSocialWalletConnector,
  TwitchSocialWalletConnector,
  TwitterSocialWalletConnector,
} from "@zerodevapp/wagmi";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import { useNetwork, useSwitchNetwork } from "wagmi";
import { WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { configureChains, createClient } from "wagmi";
import { goerli, polygonMumbai } from "wagmi/chains";
import { useState } from "react";

const connector = new GoogleSocialWalletConnector({
  options: {
    projectId: `25b9274b-ea7c-49c7-9041-b0eaa536ddd4`,
  },
});

const WagmiGoogleExample = () => {
  const { chains, provider, webSocketProvider } = configureChains(
    [polygonMumbai],
    [publicProvider()]
  );
  const client = createClient({
    autoConnect: false,
    provider,
    webSocketProvider,
  });

  const ConnectButton = () => {
    const [loading, setLoading] = useState(false);
    const { connect, error, isLoading, pendingConnector } = useConnect();
    const { address, connector, isConnected } = useAccount();
    const { disconnect } = useDisconnect();
    const { chain } = useNetwork();

    const connectWallet = async () => {
      setLoading(true);
      await connect({
        connector: new GoogleSocialWalletConnector({
          options: {
            projectId: `25b9274b-ea7c-49c7-9041-b0eaa536ddd4`,
            shimDisconnect: true,
          },
        }),
      });
      setLoading(false);
    };

    if (isConnected) {
      return (
        <div>
          <div>{address}</div>
          <div>Connected to {connector?.name}</div>
          <a
            href={`${chain?.blockExplorers?.default.url}/address/${address}`}
            target="_blank"
          >
            Explorer
          </a>
          <br />
          <button onClick={() => disconnect}>Disconnect</button>
        </div>
      );
    }
    return (
      <button disabled={isLoading || loading} onClick={connectWallet}>
        {isLoading || loading ? "loading..." : "Connect to Google"}
      </button>
    );
  };
  return (
    <WagmiConfig client={client}>
      <ConnectButton />
    </WagmiConfig>
  );
};

export default WagmiGoogleExample;
