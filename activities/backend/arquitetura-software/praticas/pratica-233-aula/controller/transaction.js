const service = require('../service/trade');

async function buyBTC(req, res) {
  // const { data, code, message } = req.body;
  // await service.buyBTC(data, code, message)
  const {data, code, message} = await service.buyBTC(req.body);

  if (message) {
    return res.status(code).json({ message });
  }
  return res.status(code).json({ data });
}

async function sellBTC(req, res) {
  const {data, code} = await service.sellBTC(req.body);

  return res.status(code).json(data);
}

module.exports = {
  buyBTC,
  sellBTC,
}