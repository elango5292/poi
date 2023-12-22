"use client"

const chains = {
    '137': {
      url: 'https://api.polygonscan.com/api',
      action: 'maticprice',
    
    },
    '1': {
      url: 'https://api.etherscan.io/api',
      action: 'ethprice',
      
    },
    '56': {
      url: 'https://api.bscscan.com/api',
      action: 'bnbprice',
      
    },
    '43114': {
      url: 'https://api.snowtrace.io/api',
      action: 'ethprice',
     
    },
    '42161': {
      url:'https://api.arbiscan.io/api',
      action:'ethprice',
      
    },
    '314': {
      url:'https://api.coingecko.com/api/v3/simple/price?ids=filecoin&vs_currencies=usd',
      
    }
  };
  
  export default function fetchChainData(chainName) {
    const chain = chains[chainName];
    if (!chain) {
      console.log('Invalid chain name');
      return "0.001";
    }
  if (chainName === "314"){
fetch(chain.url)
  .then((response) => response.json())
  .then((data) => {
    const price = data.filecoin.usd;
   return price
  })
  .catch((error) => {
    console.error(`Error fetching Filecoin price: ${error}`);
  });
  }else{
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
    
  }
