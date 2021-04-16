const koa = require('koa');
const cors = require('koa2-cors');
const koaBody = require('koa-body');
const bodyParser = require('koa-bodyparser');

const router = require('./router');

const app = new koa();

app.use(cors());
app.use(
  koaBody({
    multipart: true,
    formidable: {
      maxFileSize: 200 * 1024 * 1024, // 设置上传文件大小最大限制，默认2M
    },
  })
);
app.use(bodyParser());

app.use(router.routes());

app.listen(3000, () => {
  console.log('running...');
});
