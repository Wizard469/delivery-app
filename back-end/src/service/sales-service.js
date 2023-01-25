const { Sale } = require('../database/models');

const getAll = async () => {
  const allSales = await Sale.findAll();

  return allSales;
};

module.exports = {
  getAll,
};
