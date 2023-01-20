const SaleProductModel = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define(
    'SaleProduct',
    {
      saleId: {
        primaryKey: true,
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
        primaryKey: true,
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
        foreignKey: 'productId',
        as: 'products',
        through: SaleProduct,
        otherKey: 'saleId'
      },
    );
    models.Product.belongsToMany(
      models.Sale,
      {
        foreignKey: 'saleId',
        as: 'sales',
        through: SaleProduct,
        otherKey: 'productId'
      },
    );
  }
  return SaleProduct;
};

module.exports = SaleProductModel;