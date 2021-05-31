const Koa = require('koa');
const compose = require('koa-compose');

const app = new Koa();
const middlewares = require('./middlewares');

app.use(compose(middlewares))

app.on('error', (err, ctx) => {
    if (ctx) {
      ctx.body = {
        code: 9999,
        message: `程序运行时报错：${err.message}`
      };
    }
  });

app.listen(process.env.npm_package_config_port, process.env.npm_package_config_host, () => {
    console.log(`Server listening up in ${process.env.npm_package_config_host}:${process.env.npm_package_config_port}`)
})