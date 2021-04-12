const { Blog } = require('../model/global');
const blogMethods = require('../model/blog');
Object.assign(Blog, blogMethods);

module.exports = {
  async add(ctx) {
    let { h, c } = ctx.request.body;
    await Blog.insert(h, c);
    ctx.body = 'success';
  },
  async delete(ctx) {
    let res = await Blog.delete(ctx.params.id);
    ctx.body = res;
  },
  async update(ctx) {
    let res = await Blog.updateBlog(ctx.params.id, ctx.params.h, ctx.params.c);
    ctx.body = res;
  },
  async selectAll(ctx) {
    let res = await Blog.selectAll();
    ctx.body = res;
  },
};
