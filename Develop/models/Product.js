//TODO
// import important parts of sequelize library
const { Model} = require('sequelize');
// import our database connection from config.js

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    },
    category_id: {
      type: DataTypes.INTEGER,
      // References the `Category` model's `id`.
      references: {
        model: 'category',
        key: 'id'
      }
    },
);

module.exports = Product;
