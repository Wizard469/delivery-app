const productsService = require('../service/products-service');

const getAll = async (req, res) => {
  const products = await productsService.getAll();

  return res.status(200).json(products);
};

module.exports = {
  getAll,
};