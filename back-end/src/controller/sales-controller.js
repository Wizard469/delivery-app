const service = require('../service/sales-service');

const getAll = async (req, res) => {
  const { sellerId } = req.params;
  const allSales = await service.getAll(sellerId);
  return res.status(200).json(allSales);
};

const saleId = async (req, res, next) => {
  try {
    const sale = await service.saleId(req.params.id);
    res.status(200).json(sale);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const sale = await service.getById(req.params.id);
    res.status(200).json(sale);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll, saleId, getById,
};
