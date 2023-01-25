const service = require('../service/sales-service');

const getAll = async (req, res) => {
  const allSales = await service.getAll();
  return res.status(200).json(allSales);
};

module.exports = {
  getAll,
};
