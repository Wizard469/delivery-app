const ProductModel = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.DECIMAL(4,2),
        allowNull: false,
      },
      urlImage: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'url_image'
      }
    },
    { 
      timestamps: false,
      underscored: true,
      tableName: 'products',
    },
  );
  
  return Product;
};

module.exports = ProductModel;