import RainbowKitBTN from "./rainbowkit/page";
import EthersButton from "./ethers/page";
import Link from "next/link";

interface LinkItemProps {
  href?: string;
  label: string;
  isBold?: boolean;
  className?: string;
  value?: string;
}

const LinkItem: React.FC<LinkItemProps> = ({
  href,
  label,
  isBold,
  className,
  value,
}) => {
  return (
    <div>
      <p>
        {isBold && <b>{label}: </b>}
        {href ? (
          <Link href={href} className={className}>
            <span className="text-xs sm:text-base">{value || label}</span>
          </Link>
        ) : (
          <span className="text-base">{value}</span>
        )}
      </p>
    </div>
  );
};

interface StepProps {
  stepNumber: number;
  title: string;
  items: {
    label: string;
    href?: string;
    isBold?: boolean;
    value?: string;
  }[];
}

const Step: React.FC<StepProps> = ({ stepNumber, title, items }) => {
  return (
    <div className="flex flex-col p-2 sm:p-6 m-1 sm:m-2 bg-white border border-gray-200/95 rounded-md relative w-full basis-full md:basis-4/5">
      <span className="text-6xl font-bold text-gray-400 absolute top-0 left-0 opacity-10">
        {stepNumber}
      </span>
      <h3 className="pb-4 text-gray-800">{title}</h3>
      <div className="break-all flex gap-6 flex-col px-4 items-start justify-start">
        {items.map((item, index) => (
          <LinkItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24">
      <div className="flex flex-col min-h-screen justify-start items-center w-full">
        <div className="flex flex-col min-h-screen justify-start items-center w-full py-8 md:py-12 space-y-6 md:space-y-10 text-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Account Abstraction Task
            </h1>
          </div>
          <div className="mt-6">
            <h4 className="text-lg md:text-2xl font-semibold">
              Concepts. Transactions. Mint NFTs. SocialWallets
            </h4>
          </div>
          <div className="flex flex-col bg-white border-dashed border-2 border-gray-200/10 rounded-md relative w-full basis-full md:basis-4/5">
            <span className="text-6xl px-6 mx-2 font-bold hidden sm:flex text-gray-400 absolute top-0 left-0 opacity-10">
              3
            </span>
            <div className="flex pt-4 flex-col md:flex-row justify-center items-center gap-3 md:gap-8">
              <div>
                <RainbowKitBTN />
                <span className="text-sm">RainbowKit</span>
              </div>
              <div>
                <EthersButton />
                <span className="text-sm">Ethers API</span>
              </div>
            </div>
            <p className="pt-4 italic font-serif text-purple-500">
              Connect your Wallet to try!
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-stretch w-full p-2 sm:p-8 mt-2 sm:mt-4 bg-gray-50 rounded-md">
            {/* <div className="flex flex-col p-2 sm:p-6 m-1 sm:m-2 space-y-2 bg-white border border-gray-200/95 rounded-md relative w-full basis-full md:basis-4/5"> */}
            <Step stepNumber={2} title="Mint NFT" items={step2Items} />
            <Step
              stepNumber={1}
              title="Account Creation & Transaction"
              items={step1Items}
            />
            {/* </div> */}
          </div>
        </div>
      </div>
    </main>
  );
}

const step1Items = [
  {
    label: "Funded Goreli ETH In Meta Mask Wallet",
    href: "https://goerli.etherscan.io/tx/0x33e1afb40b7cd52029f79350fc4c10b32d900a9bdd2b89ac3a2d6383fb90164c",
  },
  {
    label: "SimpleAccount address",
    href: "https://goerli.etherscan.io/address/0x3b808582Fb3EB0409Ad32d0c8822fe3a027511F6",
    isBold: true,
    value: "0x3b808582Fb3EB0409Ad32d0c8822fe3a027511F6",
  },
  {
    label: "Funded Smart Contract",
    isBold: true,
    href: "https://goerli.etherscan.io/tx/0xfd93d594f2c51f375323e48ba00a1ec451f8f17fb7a9a641ea08b637eb1ef86f",
    value: "0xfd93d594f2c51f375323e48ba00a1ec451f8f17fb7a9a641ea08b637eb1ef86f",
  },
  {
    label: "Transfer ETH",
    isBold: true,
    href: "https://goerli.etherscan.io/tx/0xc75d9e0a6ecc7294c6f6fca9896530235e48c1e4a40a37f6ae7396317f552e08",
    value: "0xc75d9e0a6ecc7294c6f6fca9896530235e48c1e4a40a37f6ae7396317f552e08",
  },
  {
    label: "Batch Transfer ETH",
    isBold: true,
    href: "https://goerli.etherscan.io/tx/0xcca6ddd1f4b17930fca1447b6795e8ffe5f29065da81c5670c4dfd6a954e8049",
    value: "0xcca6ddd1f4b17930fca1447b6795e8ffe5f29065da81c5670c4dfd6a954e8049",
  },
  {
    label: "Funded ERC20 Tokens",
    isBold: true,
    href: "https://goerli.etherscan.io/tx/0x16506aec5f33bbe44fae78c9fbb8606551327eb818a45a928418c07f836b144a",
    value: "0x16506aec5f33bbe44fae78c9fbb8606551327eb818a45a928418c07f836b144a",
  },
  {
    label: "Transfer ERC-20 token",
    isBold: true,
    href: "https://goerli.etherscan.io/tx/0x8eb143daea32e7f9b4fdc9384ce2241d5ee56f662cf8d37428d6472e5fe3f73c",
    value: "0x8eb143daea32e7f9b4fdc9384ce2241d5ee56f662cf8d37428d6472e5fe3f73c",
  },
];

const step2Items = [
  {
    label: "Gasless AA Transaction",
    value: "Gasless AA Transaction See under ERC-721 Token Txns",
    href: "https://mumbai.polygonscan.com/address/0x6fbD5Ed295495750F9B3433d45092535FbD19EcF#tokentxnsErc721",
  },
  {
    label: "Smart Contract Address",
    href: "https://mumbai.polygonscan.com/address/0x6fbD5Ed295495750F9B3433d45092535FbD19EcF",
    isBold: true,
    value: "0x6fbD5Ed295495750F9B3433d45092535FbD19EcF",
  },
];
