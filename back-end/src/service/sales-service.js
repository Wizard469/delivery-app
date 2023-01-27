const { Sale, SaleProduct, sequelize } = require('../database/models');

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

// const newSale = async ({ sales, seller, user, address }) => {
//   const totalPrice = sales.reduce(
//     (acc, { price, quantity }) => acc + (Number(price) * quantity), 0,
//   ).toFixed(2);

//   const sale = await Sale.create({ 
//     [userId]: user.id,
//     [sellerId]: seller,
//     [totalprice]: totalPrice,
//     [deliveryAddress]: address.address,
//     [deliveryNumber]: address.number,
//     status: 'Pendente' });
//   return sale;
// };

// const saleProduct = async ({ productId, saleId, quantity }) => {
//   await SaleProduct.create({ 
//     [productid]: productId,
//     quantity,
//     [saleid]: saleId });
// };

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

module.exports = {
  getAll, saleId, add,
};
