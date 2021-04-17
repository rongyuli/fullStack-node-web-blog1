const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
const sequelize = new Sequelize('koa', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connected!!!!!!!!!!!!!!');
  })
  .catch((err) => {
    console.error('Connect failed');
  });

// 创建modal
const Blog = sequelize.define('Blog', {
  heading: Sequelize.STRING,
  content: Sequelize.STRING,
});
const carousel = sequelize.define(
  'carousel',
  {
    img: Sequelize.STRING,
    cover: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: 'carousel',
  }
);
sequelize.sync();

module.exports = { Blog, carousel };
