const SaleProductModel = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define(
    'SaleProduct',
    {
      saleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'sale_id',
        references: {
          model: 'sales',
          key: 'id',
        },
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'product_id',
        references: {
          model: 'products',
          key: 'id',
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { 
      timestamps: false,
      underscored: true,
      tableName: 'sales_products',
    },
  );

  SaleProduct.associate = (models) => {
    models.Sale.belongsToMany(
      models.Product,
      {
        foreignKey: 'saleId',
        as: 'products',
        through: SaleProduct,
      },
    );
    models.Product.belongsToMany(
      models.Sale,
      {
        foreignKey: 'productId',
        as: 'sales',
        through: SaleProduct,
      },
    );
  }
  return SaleProduct;
};

module.exports = SaleProductModel;