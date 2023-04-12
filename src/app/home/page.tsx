// Imports
import Image from "next/image";
import { Inter } from "next/font/google";
import RainbowKitBTN from "../rainbowkit/page";
import WagmiButton from "../wagma/page";
import EthersButton from "../ethers/page";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

// Home component
export default function Home() {
  return (
    <main className="min-h-screen p-6">
      <div className="flex flex-col justify-center items-center space-y-6">
        <h1 className="text-4xl font-bold">Step XXX Account Abstraction</h1>
        <h2 className="text-2xl font-semibold">
          basic_account_creation_trans + mint_nft + create_wallet_social
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <div>
            <WagmiButton />
          </div>
          <div>
            <RainbowKitBTN />
          </div>
          <div>
            <EthersButton />
          </div>
        </div>
        <div className="w-full mt-8">
          <div className="flex flex-wrap gap-6 bg-gray-100 items-stretch w-full p-6 border-gray-200 rounded-md">
            <div className="w-full sm:w-1/2">
              <h3 className="text-xl font-semibold">Step 2: Mint NFT</h3>
              <StepContent
                links={[
                  {
                    href: "https://mumbai.polygonscan.com/address/0x6fbD5Ed295495750F9B3433d45092535FbD19EcF#tokentxnsErc721",
                    text: "Gasless AA Trans see under ERC-721 Token Txns",
                  },
                ]}
                details={[
                  {
                    title: "Smart Contract Address:",
                    content: "0x6fbD5Ed295495750F9B3433d45092535FbD19EcF",
                  },
                ]}
              />
            </div>
            <div className="w-full sm:w-1/2">
              <h3 className="text-xl font-semibold">
                Step 1 basic_account_creation_trans
              </h3>
              <StepContent
                links={[
                  {
                    href: "https://goerli.etherscan.io/tx/0x33e1afb40b7cd52029f79350fc4c10b32d900a9bdd2b89ac3a2d6383fb90164c",
                    text: "Funded Goreli ETH In Meta Mask Wallet",
                  },
                  {
                    href: "https://goerli.etherscan.io/tx/0xfd93d594f2c51f375323e48ba00a1ec451f8f17fb7a9a641ea08b637eb1ef86f",
                    text: "Funded Smart Contract: 0xfd93d594f2c51f375323e48ba00a1ec451f8f17fb7a9a641ea08b637eb1ef86f",
                  },
                  {
                    href: "https://goerli.etherscan.io/tx/0xc75d9e0a6ecc7294c6f6fca9896530235e48c1e4a40a37f6ae7396317f552e08",
                    text: "Transfer ETH: 0xc75d9e0a6ecc7294c6f6fca9896530235e48c1e4a40a37f6ae7396317f552e08",
                  },
                  {
                    href: "https://goerli.etherscan.io/tx/0xc75d9e0a6ecc7294c6f6fca9896530235e48c1e4a40a37f6ae7396317f552e08",
                    text: "Batch Transfer ETH: 0xcca6ddd1f4b17930fca1447b6795e8ffe5f29065da81c5670c4dfd6a954e8049",
                  },
                  {
                    href: "https://goerli.etherscan.io/tx/0x16506aec5f33bbe44fae78c9fbb8606551327eb818a45a928418c07f836b144a",
                    text: "Funded ERC20 Tokens: 0x16506aec5f33bbe44fae78c9fbb8606551327eb818a45a928418c07f836b144a",
                  },
                  {
                    href: "https://goerli.etherscan.io/tx/0x8eb143daea32e7f9b4fdc9384ce2241d5ee56f662cf8d37428d6472e5fe3f73c",
                    text: "Transfer ERC-20 token: 0x8eb143daea32e7f9b4fdc9384ce2241d5ee56f662cf8d37428d6472e5fe3f73c",
                  },
                ]}
                details={[
                  {
                    title: "SimpleAccount address:",
                    content: "0x3b808582Fb3EB0409Ad32d0c8822fe3a027511F6",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Helper components
function StepTitle({ title }: any) {
  return <h3>{title}</h3>;
}

function StepContent({ links, details }: any) {
  return (
    <div className="flex gap-6 flex-col px-4 items-start justify-start">
      {links.map((link: any, index: any) => (
        <p key={index}>
          <Link href={link.href}>{link.text}</Link>
        </p>
      ))}
      {details.map((detail: any, index: any) => (
        <p key={index}>
          <b>{detail.title} </b>
          {detail.content}
        </p>
      ))}
    </div>
  );
}
