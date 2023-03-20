// api externa
// consumindo outra api
// npm i axios
// "fetch"

const axios = require('axios');

async function getBTCPrice() {
  const { data } = await axios.get('https://www.mercadobitcoin.net/api/BTC/ticker/');

  return data.ticker
}

module.exports = getBTCPrice;
