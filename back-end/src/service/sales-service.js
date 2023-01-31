const { Sale, SaleProduct, sequelize, Product, User } = require('../database/models');

const getAll = async (sellerId) => {
  const allSales = await Sale.findAll({ where: { sellerId } });
  return allSales;
};

const add = async ({ userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, products }) => {
  const sale = await sequelize.transaction(async (tr) => {
    const registeredSale = await Sale.create({
      userId,
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
    }, { transaction: tr });

    await Promise.all(products.map(async ({ id, quantity }) => {
      await SaleProduct.create({
        saleId: registeredSale.id,
        productId: id,
        quantity,
      }, { transaction: tr });
    }));

    return registeredSale;
  });

  return sale;
};

const saleId = async (id) => {
  const detail = await Sale.findOne({
    where: { id },
    include: [{
      model: SaleProduct,
      as: 'orders',
      attributes: ['id', 'name', 'price'],
      through: { attributes: ['quantity'], as: 'salesProduct' },
    }],
  });
  return detail;
};

const getById = async (id) => {
  const detail = await Sale.findOne({
    where: { id },
    include: [{
      model: Product,
      through: { where: { saleId: id } },
      as: 'products',
    },
    {
      model: User,
      as: 'seller',
    }],
  });
  return detail;
};

module.exports = {
  getAll, saleId, add, getById,
};
