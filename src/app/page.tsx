import RainbowKitBTN from "./rainbowkit/page";
import EthersButton from "./ethers/page";
import Link from "next/link";

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
          <div className="flex flex-col bg-white border-dashed border-2 border-gray-200/10 rounded-md relative w-full md:w-4/5">
            <span className="text-6xl px-6 mx-2 font-bold text-gray-400 absolute top-0 left-0 opacity-10">
              3
            </span>
            <div className="flex pt-4 flex-col md:flex-row justify-center items-center gap-8">
              <div>
                <RainbowKitBTN />
                <span className="text-sm">RainbowKit</span>
              </div>
              <div>
                <EthersButton />
                <span className="text-sm">Ethers API</span>
              </div>
            </div>
            <p className="pt-4 italic font-serif">
              <Link href="https://github.com/mjunaidca/zeroaa-logins">
                Next.js Tutorial To Create Social Wallets
              </Link>
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-stretch w-full p-8 mt-4 bg-gray-50 rounded-md">
            <div className="flex flex-col p-6 m-2 bg-white border border-gray-200/95 rounded-md relative w-full md:w-4/5">
              <span className="text-6xl font-bold text-gray-300 absolute top-0 left-0 opacity-10">
                2
              </span>
              <h3 className="pb-4 break-all">Step 2: Mint NFT</h3>
              <p>
                <Link href="https://mumbai.polygonscan.com/address/0x6fbD5Ed295495750F9B3433d45092535FbD19EcF#tokentxnsErc721">
                  Gasless AA Trans see under ERC-721 Token Txns
                </Link>
              </p>
              <p className="break-all">
                <b>Smart Contract Address:</b>
                0x6fbD5Ed295495750F9B3433d45092535FbD19EcF
              </p>
            </div>
            <div className="flex flex-col p-6 m-2 bg-white border border-gray-200/95 rounded-md relative w-full md:w-4/5">
              <span className="text-6xl font-bold text-gray-300 absolute top-0 left-0 opacity-10">
                1
              </span>
              <h3 className="pb-4">Step 1: Account Creation & Transaction</h3>

              <div className=" break-all flex gap-6 flex-col px-4 items-start justify-start">
                <div>
                  <Link href="https://goerli.etherscan.io/tx/0x33e1afb40b7cd52029f79350fc4c10b32d900a9bdd2b89ac3a2d6383fb90164c">
                    <p>Funded Goreli ETH In Meta Mask Wallet</p>
                  </Link>
                </div>
                <div>
                  <p>
                    <b>SimpleAccount address: </b>
                    0x3b808582Fb3EB0409Ad32d0c8822fe3a027511F6
                  </p>
                </div>
                <div>
                  <Link href="https://goerli.etherscan.io/tx/0xfd93d594f2c51f375323e48ba00a1ec451f8f17fb7a9a641ea08b637eb1ef86f">
                    <p>
                      <b>Funded Smart Contract:</b>
                      0xfd93d594f2c51f375323e48ba00a1ec451f8f17fb7a9a641ea08b637eb1ef86f
                    </p>
                  </Link>
                </div>
                <div>
                  <Link href="https://goerli.etherscan.io/tx/0xc75d9e0a6ecc7294c6f6fca9896530235e48c1e4a40a37f6ae7396317f552e08">
                    <p>
                      <b>Transfer ETH: </b>
                      0xc75d9e0a6ecc7294c6f6fca9896530235e48c1e4a40a37f6ae7396317f552e08
                    </p>
                  </Link>
                </div>
                <div>
                  <Link href="https://goerli.etherscan.io/tx/0xcca6ddd1f4b17930fca1447b6795e8ffe5f29065da81c5670c4dfd6a954e8049">
                    <p>
                      <b>Batch Transfer ETH:</b>
                      0xcca6ddd1f4b17930fca1447b6795e8ffe5f29065da81c5670c4dfd6a954e8049
                    </p>
                  </Link>
                </div>
                <div>
                  <Link href="https://goerli.etherscan.io/tx/0x16506aec5f33bbe44fae78c9fbb8606551327eb818a45a928418c07f836b144a">
                    <p>
                      <b>Funded ERC20 Tokens:</b>
                      0x16506aec5f33bbe44fae78c9fbb8606551327eb818a45a928418c07f836b144a
                    </p>
                  </Link>
                </div>
                <div>
                  <Link href="https://goerli.etherscan.io/tx/0x8eb143daea32e7f9b4fdc9384ce2241d5ee56f662cf8d37428d6472e5fe3f73c">
                    <p>
                      <b> Transfer ERC-20 token: </b>
                      0x8eb143daea32e7f9b4fdc9384ce2241d5ee56f662cf8d37428d6472e5fe3f73c
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
