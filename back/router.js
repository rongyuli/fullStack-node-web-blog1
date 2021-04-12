const Router = require('koa-router');
const router = new Router();

const blog = require('./controler/blog');

module.exports = router
  .post('/blog', blog.add)
  .delete('/blog/:id', blog.delete)
  .put('/blog/:id/:h/:c', blog.update)
  .get('/blog', blog.selectAll);
