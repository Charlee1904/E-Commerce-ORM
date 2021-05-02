const { Model, DataTypes, Sequelize } = require('sequelize');
const Sequelize = require('sequelize');
const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(

  {
    catagory_name:{
      type:Sequelize.DataTypes.STRING,
      allowNull:false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
