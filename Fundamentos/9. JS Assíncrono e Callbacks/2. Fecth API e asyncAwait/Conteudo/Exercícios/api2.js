const addCoinData = ({ id, symbol, priceUsd }) => {
  const cryptoList = document.getElementById('cryptoRanking');
  const newCoin = document.createElement('li');
  newCoin.innerText = `${id} (${symbol}) ${priceUsd}`;
  cryptoList.appendChild(newCoin);
};

const getCryptoArray = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const cryptoArray = await fetch(url)
  .then(response => response.json())
  .then(data => data.data)

  cryptoArray.filter((coin) => coin.rank <= 10).forEach((coin) => addCoinData(coin));
}

window.onload = () => {
  getCryptoArray();
};