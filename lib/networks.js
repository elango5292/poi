
export default function(id,data="rpc"){
    
  const networks = {
    11155111: {
      network: "sepolia",
      name: "sepolia",
      rpc: "https://rpc.ankr.com/eth_sepolia",
      logo:"ethereum.svg",
      logotab:"ethereum.svg",
     
    },
    80001: {
      network: "Polygon Mumbai",
      name: "Polygon Mumbai",
      rpc: "https://polygon-mumbai-bor.publicnode.com",
      logo:"polygon.svg",
      logotab:"polygon.svg",
     
    },
    97: {
      network: "Binance Smart Chain Testnet",
      name: "Binance Smart Chain Testnet",
      rpc: "https://data-seed-prebsc-1-s1.binance.org:8545",
      logo:"bnb.svg",
      logotab:"bnbtab.svg",
      
    },
    43113: {
      network: "Avalanche Fuji",
      name: "Avalanche Fuji",
      rpc: "https://api.avax-test.network/ext/bc/C/rpc",
      logo:"avalanche.svg",
      logotab:"avalanche.svg",
    },
    42161: {
      network: "Arbitrum One",
      name: "Arbitrum One",
      rpc: "https://arb1.arbitrum.io/rpc",
      logo:"arbitrum.svg",
      logotab:"arbitrum.svg",
      id_usd : 'ethusd'
    },
    43114: {
      network: "Avalanche",
      name: "Avalanche",
      rpc: "https://api.avax.network/ext/bc/C/rpc",
      logo:"avalanche.svg",
      logotab:"avalanche.svg",
      id_usd : 'ethusd'
    },
    137: {
      network: "Polygon",
      name: "Polygon",
      rpc: "https://polygon-rpc.com",
      logo:"polygon.svg",
      logotab:"polygon.svg",
      id_usd : 'maticusd'
    },
    56: {
      network: "BNB Smart Chain",
      name: "BNB Smart Chain",
      rpc: "https://rpc.ankr.com/bsc",
      logo:"bnb.svg",
      logotab:"bnbtab.svg",
      id_usd : 'ethusd'
    },
    1: {
      name: "Ethereum",
      network: "Ethereum",
      rpc: "https://cloudflare-eth.com",
      logo:"ethereum.svg",
      logotab:"ethereum.svg",
      id_usd : 'ethusd'
    }
  };
  return networks[id]?.[data];
}