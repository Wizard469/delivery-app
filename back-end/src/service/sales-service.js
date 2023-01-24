const { Sale } = require('../database/models');

const sales = async () => {
  const allSales = await Sale.findAll();

  return allSales;
};

module.exports = {
  sales,
};
