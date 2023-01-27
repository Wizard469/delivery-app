const saleService = require('../service/sales-service');

const addSale = async (req, res) => {
  const sale = await saleService.add(req.body);

  res.status(201).json(sale);
};

module.exports = {
  addSale,
};