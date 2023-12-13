const chains = {
    '137': {
      url: 'https://api.polygonscan.com/api',
      action: 'maticprice',
      api_key: process.env.POLY_API_KEY,
    
    },
    '1': {
      url: 'https://api.etherscan.io/api',
      action: 'ethprice',
      api_key: process.env.ETH_API_KEY,
      
    },
    '56': {
      url: 'https://api.bscscan.com/api',
      action: 'bnbprice',
      api_key: process.env.BNB_API_KEY,
      
    },
    '43114': {
      url: 'https://api.snowtrace.io/api',
      action: 'ethprice',
      api_key: process.env.AVA_API_KEY,
     
    },
    '42161': {
      url:'https://api.arbiscan.io/api',
      action:'ethprice',
      api_key:'DQIDIPE1916II3AN1RDYYVPPMA9FFS4S2S',
      
    }
  };
  
  export default function fetchChainData(chainName) {
    const chain = chains[chainName];
    if (!chain) {
      console.log('Invalid chain name');
      return "0.001";
    }
  
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  
    return fetch(`${chain.url}?module=stats&action=${chain.action}&apikey=${chain.api_key}`, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch(error => {
        console.log('Fetch error:', error);
        throw error;
      });
  }
  