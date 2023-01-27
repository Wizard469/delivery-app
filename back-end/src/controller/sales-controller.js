const service = require('../service/sales-service');

const getAll = async (req, res) => {
  const { sellerId } = req.params;
  const allSales = await service.getAll(sellerId);
  return res.status(200).json(allSales);
};

// const newSale = async (req, res) => {
//   const { user } = req;
//   console.log('body',req.body)
//   const { sales, seller, address } = req.body;

//   const sale = await service.newSale({ sales, seller, user, address });
//   try {
//     await Promise.all(sales.map(async ({ id, quantity }) => {
//       await service.saleProduct({ productId: id, quantity, saleId: sale.id });
//       return null;
//     }));
//     return res.status(201).json(sale.id);
//   } catch (error) {
//     return res.status(400).json(error);
//   }
// };

const saleId = async (req, res, next) => {
  try {
    const sale = await service.saleId(req.params.id);
    res.status(200).json(sale);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll, saleId,
};
