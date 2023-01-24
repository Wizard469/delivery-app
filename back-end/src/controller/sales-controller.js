const salesService = require('../service/products-service');

const sales = async (req, res) => {
  const allSales = await salesService.getAll();

  return res.status(200).json(allSales);
};

module.exports = {
  sales,
};
