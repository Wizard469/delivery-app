const { Sale, SaleProduct } = require('../database/models');

const userId = 'user_id';
const sellerId = 'seller_id';
const totalprice = 'total_price';
const deliveryAddress = 'delivery_address';
const deliveryNumber = 'delivery_number';
const productid = 'product_id';
const saleid = 'sale_id';

const getAll = async () => {
  const allSales = await Sale.findAll();

  return allSales;
};

const newSale = async ({ sales, seller, user, address }) => {
  const totalPrice = sales.reduce(
    (acc, { price, quantity }) => acc + (Number(price) * quantity), 0,
  ).toFixed(2);

  const sale = await Sale.create({ 
    [userId]: user.id,
    [sellerId]: seller,
    [totalprice]: totalPrice,
    [deliveryAddress]: address.address,
    [deliveryNumber]: address.number,
    status: 'Pendente' });
  return sale;
};

const saleProduct = async ({ productId, saleId, quantity }) => {
  await SaleProduct.create({ 
    [productid]: productId,
    quantity,
    [saleid]: saleId });
};

const saleId = async (id) => {
  const { dataValues: saleById } = await Sale.findById(id);
  return saleById;
};

module.exports = {
  getAll, newSale, saleProduct, saleId,
};
