
export default function(id,data="rpc"){
    
  const networks = {
    11155111: {
      network: "sepolia",
      rpc: "https://rpc.ankr.com/eth_sepolia",
      logo:"ethereum.svg"
    },
    80001: {
      name: "Polygon Mumbai",
      rpc: "https://polygon-mumbai-bor.publicnode.com",
      logo:"polygon.svg"
    },
    97: {
      name: "Binance Smart Chain Testnet",
      rpc: "https://data-seed-prebsc-1-s1.binance.org:8545",
      logo:"bnb.svg"
    },
    43113: {
      name: "Avalanche Fuji",
      rpc: "https://api.avax-test.network/ext/bc/C/rpc",
      logo:"avalanche.svg"
    },
    42161: {
      name: "Arbitrum One",
      rpc: "https://arb1.arbitrum.io/rpc",
      logo:"arbitrum.svg"
    },
    43114: {
      name: "Avalanche",
      rpc: "https://api.avax.network/ext/bc/C/rpc",
      logo:"avalanche.svg"
    },
    137: {
      name: "Polygon",
      rpc: "https://polygon-rpc.com",
      logo:"polygon.svg"
    },
    '56': {
      name: "BNB Smart Chain",
      rpc: "https://rpc.ankr.com/bsc",
      logo:"bnb.svg"
    },
    1: {
      network: "Ethereum",
      rpc: "https://cloudflare-eth.com",
      logo:"ethereum.svg"
    }
  };
  return networks[id]?.[data];
}