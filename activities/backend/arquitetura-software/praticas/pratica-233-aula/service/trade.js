// conexão entre model e controller
const { getBTCPrice } = require('../integration/mercadoBC');
const model = require('../model/transactions');

const { validator } = require('../middleware/validation');
const { FLOAT_CONTROL_BRL, FLOAT_CONTROL_BTC } = require('../utils/constants');

const btc = await getBTCPrice();

async function buyBTC({ amountBRL }) {
  validator(amountBRL);

  if(balance.totalAmount < amountBRL) {
    return { code: 403, message: 'Saldo insuficiente!' }
  }

  const balance = await model.getBalanceBR();

  const fraction = (amountBRL / btc.buy).toFixed(8);

  await model.createTRansaction({amount: -(amountBRL * FLOAT_CONTROL_BRL), type: 'withdraw', coin: 'BRL'})

  await model.createTRansaction({ amount: fraction * FLOAT_CONTROL_BTC, type: 'deposit', coin: 'BTC'});

  return { code: 201, data: { fraction, amountBRL } };
}

async function sellBTC({ amountBRL }) {
  validator(amountBRL);

  const fraction = (amountBRL / btc.sell).toFixed(8);
  const balance = await model.getBalanceBTC();

  if(balance.totalAmount < fraction) {
    throw { code: 403, message: 'Saldo insuficiente!' };
  }

  await model.createTRansaction({ amount: amountBRL * FLOAT_CONTROL_BRL, type: 'deposit', coin: 'BRL'});

  await model.createTRansaction({ amount: -(fraction * FLOAT_CONTROL_BTC), type: 'withdraw', coin: 'BTC'});

  return { code: 201, data: { fraction, amountBRL } };
}

module.exports = {
  buyBTC,
  sellBTC,
}