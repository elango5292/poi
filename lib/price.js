const chains = {
  'poly': {
      url: 'https://api.polygonscan.com/api',
      action: 'maticprice',
      api_key: process.env.POLY_API_KEY
  },
  'eth': {
      url: 'https://api.etherscan.io/api',
      action: 'ethprice',
      api_key: process.env.ETH_API_KEY
  },
  'bnb': {
      url: 'https://api.bscscan.com/api',
      action: 'bnbprice',
      api_key: process.env.BNB_API_KEY
  },
  'ava': {
      url: 'https://api.snowtrace.io/api',
      action: 'ethprice',
      api_key: process.env.AVA_API_KEY
  }
};

export default function fetchChainData(chainName) {
  const chain = chains[chainName];
  if (!chain) {
      console.log('Invalid chain name');
      return;
  }

  const requestOptions = {
      method: 'GET',
      redirect: 'follow'
  };

  fetch(`${chain.url}?module=stats&action=${chain.action}&apikey=${chain.api_key}`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}

