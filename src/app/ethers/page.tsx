"use client";
import { getZeroDevSigner, getSocialWalletOwner } from "@zerodevapp/sdk";
import { useState } from "react";
import {
  SocialWallet,
  GoogleSocialWallet,
  FacebookSocialWallet,
  GithubSocialWallet,
  DiscordSocialWallet,
  TwitchSocialWallet,
  TwitterSocialWallet,
} from "@zerodevapp/social-wallet";
import { useMemo } from "react";

const EthersButton = () => {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const socialWallet = useMemo(() => {
    return new SocialWallet();
  }, []);

  const createWallet = async () => {
    setLoading(true);
    const signer = await getZeroDevSigner({
      projectId: `25b9274b-ea7c-49c7-9041-b0eaa536ddd4`,
      owner: await getSocialWalletOwner(
        `25b9274b-ea7c-49c7-9041-b0eaa536ddd4`,
        socialWallet
      ),
    });
    setAddress(await signer.getAddress());
    setLoading(false);
  };

  const disconnect = async () => {
    await socialWallet.disconnect();
    setAddress("");
  };

  const connected = !!address;

  return (
    <div>
      {connected && (
        <div>
          <label>Wallet: {address}</label>
        </div>
      )}
      <div>
        {!connected && (
          <button onClick={createWallet} disabled={loading}>
            {loading ? "loading..." : "Create Wallet"}
          </button>
        )}
        {connected && (
          <button onClick={disconnect} disabled={loading}>
            Disconnect
          </button>
        )}
      </div>
    </div>
  );
};

export default EthersButton;
