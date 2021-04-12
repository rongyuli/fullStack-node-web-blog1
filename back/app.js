const koa = require('koa');
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');

const router = require('./router');

const app = new koa({
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
});

app.use(cors());
app.use(bodyParser());

app.use(router.routes());

app.listen(3000, () => {
  console.log('running...');
});
