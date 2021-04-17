const Router = require('koa-router');
const router = new Router();

const blog = require('./controler/blog');
const carousel = require('./controler/caroucel.js');

module.exports = router
  .post('/blog', blog.add)
  .delete('/blog/:id', blog.delete)
  .put('/blog/:id/:h/:c', blog.update)
  .get('/blog', blog.selectAll)

  .post('/carousel', carousel.add)
  .delete('/carousel/:id', carousel.delete)
  .put('/carousel/:id', carousel.put)
  .put('/carousel/:id/:cover', carousel.putCover)
  .get('/carousel', carousel.selectAll);
