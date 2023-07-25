// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Product belongsTo Category
// Defines a Category association starting with a Product 
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Categories have many Products
// Defines a Category having many Products to create multiple foreign keys in the 'Product' table
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// Products belongToMany Tags (through ProductTag)
// Product is associted with many Tags
Product.belongsToMany(Tag, {
  through: ProductTag, 
  foreignKey: 'product_id'
});

// Tags belongToMany Products (through ProductTag)
// Tags associated with many Products 
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
