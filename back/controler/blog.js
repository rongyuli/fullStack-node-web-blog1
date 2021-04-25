const { Blog } = require('../model/global');
const blogMethods = require('../model/blog');
const { putType } = require('../model/blog');
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
  async getType(ctx) {
    const type = ctx.params.type;
    ctx.body = await Blog.getType(type);
  },
  async putType(ctx) {
    const id = ctx.params.id;
    const type = ctx.params.type;
    console.log(id, type);
    ctx.body = await Blog.putType(id, type);
  },
};
