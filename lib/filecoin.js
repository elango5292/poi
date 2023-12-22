const url = `https://api.coingecko.com/api/v3/simple/price?ids=filecoin&vs_currencies=usd`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const price = data.filecoin.usd;
    console.log(`Filecoin (FIL) price: ${price} USD`);
  })
  .catch((error) => {
    console.error(`Error fetching Filecoin price: ${error}`);
  });
