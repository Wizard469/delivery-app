const SaleModel = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    'Sale', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
        },
      },
      sellerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'seller_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
        },
      },
      totalPrice: {
        type: DataTypes.DECIMAL(9,2),
        field: 'total_price',
        allowNull: false,
      },
      deliveryAddress: {
        type: DataTypes.STRING,
        field: 'delivery_address',
        allowNull: false
      },
      deliveryNumber: {
        type: DataTypes.STRING,
        field: 'delivery_number',
        allowNull: false
      },
      saleDate: {
        type: DataTypes.DATE,
        defaultValue: sequelize.fn('NOW')
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    { 
      timestamps: false,
      underscored: true,
      tableName: 'sales',
    },
  );

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    Sale.belongsTo(models.User, { foreignKey: 'sellerId', as: 'seller' });
  }
  return Sale; 
};

module.exports = SaleModel;