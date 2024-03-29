const service = require('../service/sales-service');

const getAll = async (req, res) => {
  const { sellerId } = req.params;
  const allSales = await service.getAll(sellerId);
  return res.status(200).json(allSales);
};

const getAllByUserId = async (req, res) => {
  const { userId } = req.params;
  const allSales = await service.getAllByUserId(userId);
  return res.status(200).json(allSales);
};

const getById = async (req, res, next) => {
  try {
    const sale = await service.getById(req.params.id);

    res.status(200).json(sale);
  } catch (error) {
    next(error);
  }
};
const updateStatus = async (req, res, next) => {
  try {
    const newStatus = await service.updateStatus(req.params.saleId, req.body.status);
    
    res.status(200).json(newStatus);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll, getById, getAllByUserId, updateStatus,
};
