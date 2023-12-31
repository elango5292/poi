// PageComponent.js
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  sepolia,arbitrum,avalanche,bscTestnet,bsc,polygonMumbai,polygon,mainnet,avalancheFuji,filecoin
} from "wagmi/chains";


import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
  [mainnet, bsc, polygon, avalanche, arbitrum, avalancheFuji,filecoin, bscTestnet, polygonMumbai, sepolia
  ],
  [
    alchemyProvider({ apiKey: process.env.ALC_API_KEY  }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "POI",
  projectId: "28f4be6376c23dfbeeb7ef1dd2908f10",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

import React from "react";
import Trans from "./SendTrans";
import Ppost from "./ppost";
import Ppublish from "./ppublish";


// const activeChain = "goerli";

const SendTrans = ({ data, hsh, s, completion, setCompletion,work,chain,amount }) => {

   

  const handletx = (childData) => {
    settx(childData);
  };



  const va = s;
  return (
    <div>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider theme={darkTheme({
      accentColor: '#DADADA',
      accentColorForeground: 'black',
      borderRadius: 'small',
      fontStack: 'rounded',
      overlayBlur: 'small',
    })} chains={chains}>
          {va === "showwal" && <Trans setchain={chain} />}

          {va === 0 && (
            <Ppost
              data={data}
              completion={completion}
              setCompletion={setCompletion}
              hsh={hsh}
              work={work}
            />
          )}

          {va === 1 && (
            <Ppublish
              data={data}
              completion={completion}
              setCompletion={setCompletion}
              hsh={hsh}
              work={work}
              amount={amount}
             
            />
          )}

        </RainbowKitProvider>
      </WagmiConfig>
    </div>
  );
};

export default SendTrans;
