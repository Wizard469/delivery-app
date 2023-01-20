const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { 
      timestamps: false,
      underscored: true,
      tableName: 'users',
    },
  );

  User.associate = (models) => {
    User.hasMany(models.Sales, { foreignKey: 'userId', as: 'user' });
    User.hasMany(models.Sales, { foreignKey: 'sellerId', as: 'seller' });
  }
  return User;
};

module.exports = UserModel;