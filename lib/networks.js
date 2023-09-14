
export default function(id){
    
  const networks = {
    11155111: {
      network: "sepolia",
      rpc: "https://rpc.ankr.com/eth_sepolia"
    },
    80001: {
      name: "Polygon Mumbai",
      rpc: "https://polygon-mumbai-bor.publicnode.com"
    },
    97: {
      name: "Binance Smart Chain Testnet",
      rpc: "https://data-seed-prebsc-1-s1.binance.org:8545"
    },
    43113: {
      name: "Avalanche Fuji",
      rpc: "https://api.avax-test.network/ext/bc/C/rpc"
    },
    42161: {
      name: "Arbitrum One",
      rpc: "https://arb1.arbitrum.io/rpc"
    },
    43114: {
      name: "Avalanche",
      rpc: "https://api.avax.network/ext/bc/C/rpc"
    },
    137: {
      name: "Polygon",
      rpc: "https://polygon-rpc.com"
    },
    '56': {
      name: "BNB Smart Chain",
      rpc: "https://rpc.ankr.com/bsc"
    },
    1: {
      network: "Ethereum",
      rpc: "https://cloudflare-eth.com"
    }
  };
  return networks[id]?.rpc;
}