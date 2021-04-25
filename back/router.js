const Router = require('koa-router');
const router = new Router();

const blog = require('./controler/blog');
const carousel = require('./controler/caroucel.js');

module.exports = router
  .post('/blog', blog.post)
  .delete('/blog/:id', blog.delete)
  .put('/blog/:id', blog.put)
  .put('/blog/:type/:id', blog.putType)
  .get('/blog', blog.selectAll)
  .get('/blog/:id', blog.select)
  .get('/blog/type/:type', blog.getType)

  .post('/carousel', carousel.add)
  .delete('/carousel/:id', carousel.delete)
  .put('/carousel/:id', carousel.put)
  .put('/carousel/:id/:cover', carousel.putCover)
  .get('/carousel', carousel.selectAll);
