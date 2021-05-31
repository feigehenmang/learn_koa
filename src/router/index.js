const KoaRouter = require('koa-router')
const router = new KoaRouter()
const routes = require('./routes');
routes.forEach(route => {
    const {path, method, controller} = route;
    router[method](path, controller);
})
module.exports = router;