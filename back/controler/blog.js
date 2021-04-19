const { Blog } = require('../model/global');
const blogMethods = require('../model/blog');
Object.assign(Blog, blogMethods);

module.exports = {
  async post(ctx) {
    let { heading, author, content } = ctx.request.body;
    console.log(heading, author, content);
    await Blog.post(heading, author, content);
    ctx.body = 'success';
  },
  async delete(ctx) {
    let res = await Blog.delete(ctx.params.id);
    ctx.body = res;
  },
  async put(ctx) {
    const id = ctx.params.id;
    const { heading } = ctx.request.body;
    const { content } = ctx.request.body;
    ctx.body = await Blog.put(id, heading, content);
  },
  async select(ctx) {
    const id = ctx.params.id;
    ctx.body = await Blog.select(id);
  },
  async selectAll(ctx) {
    ctx.body = await Blog.selectAll();
  },
};
