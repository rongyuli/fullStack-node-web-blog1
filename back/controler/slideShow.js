const fs = require('fs');
const path = require('path');
const { SlideShow } = require('../model/global');
const SlideShowMethods = require('../model/slideShow');
Object.assign(SlideShow, SlideShowMethods);

module.exports = {
  async add(ctx) {
    const file = ctx.request.files.img;

    console.log(111, file);

    // const reader = fs.createReadStream(file.path);
    // let filePath = path.join(__dirname, '/static/img/') + `${file.name}`;
    // console.log(filePath);
    // // 创建可写流
    // const upStream = fs.createWriteStream(filePath);
    // // 可读流通过管道写入可写流
    // reader.pipe(upStream);
    // return (ctx.body = '上传成功！');

    await SlideShow.insert(ctx.request.files[0]);
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
