const fs = require('fs');
const { SlideShow } = require('../model/global');
const SlideShowMethods = require('../model/slideShow');
Object.assign(SlideShow, SlideShowMethods);

module.exports = {
  async add(ctx) {
    const srcFile = ctx.request.files.img;
    const randomName = new Date().getTime() + '.' + srcFile.name.split('.')[1];
    const tgtPath = `static/img/${randomName}`;
    const tgtContent = fs.readFileSync(srcFile.path);
    fs.writeFileSync(tgtPath, tgtContent);
    fs.unlinkSync(srcFile.path);
    const res = await SlideShow.insert(`/img/${randomName}`);
    ctx.body = res;
  },
  async delete(ctx) {
    let res = await SlideShow.delete(ctx.params.id);
    ctx.body = res;
  },
  async update(ctx) {
    let res = await SlideShow.updateBlog(ctx.params.id, ctx.params.h, ctx.params.c);
    ctx.body = res;
  },
  async selectAll(ctx) {
    let res = await SlideShow.selectAll();
    ctx.body = res;
    // ctx.set('Content-Type', 'multipart/form-data');
  },
};
