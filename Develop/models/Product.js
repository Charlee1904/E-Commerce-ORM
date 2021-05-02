// import important parts of sequelize library
const Sequelize = require('sequelize');
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const Category = require('./Category');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    product_name:{
      type:Sequelize.DataTypes.STRING,
      allowNull:false,
    },

      price:{
      type:Sequelize.DataTypes.DECIMAL,
      allowNull:false,
      isDecimal: true,
    },

    stock:{
      type:Sequelize.DataTypes.INTEGER,
      allowNull:false,
      defaultValue:10,
      isNumeric: true,
    },

    category_id:{
       type:Sequelize.DataTypes.INTEGER,
       references: {
        model: Category,
        key: 'id',
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
