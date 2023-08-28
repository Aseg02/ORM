const { Product } = require('../models');

const productData = [
  {
    product_name: 'Cargo Shorts',
    price: 29.99,
    stock: 22,
    category_id: 2,
  },
  {
    product_name: 'White T-Shirt',
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Running Shoes',
    price: 90.0,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: 'Baseball Hat',
    price: 22.99,
    stock: 12,
    category_id: 4,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
