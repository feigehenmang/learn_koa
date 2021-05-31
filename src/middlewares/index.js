const router = require('../router');
const koaBody = require('koa-bodyparser')
const response = require('./response');
const error = require('./error');
const cors = require('@koa/cors');

const mdKoaBody = koaBody({
    enableTypes: [ 'json', 'form', 'text', 'xml' ],
    formLimit: '56kb',
    jsonLimit: '1mb',
    textLimit: '1mb',
    xmlLimit: '1mb',
    strict: true
  });

const formidable = require('./formidable');
const mdFormidable = formidable();
/**
 * 统一返回格式
 */
const mdResHandler = response();
/**
 * 错误处理
 */
const mdErrorHandler = error();
const mdRoute = router.routes();

const mdRouterAllowed = router.allowedMethods();


/**
 * 跨域处理
 */
 const mdCors = cors({
    origin: '*',
    credentials: true,
    allowMethods: [ 'GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH' ]
  });

module.exports = [
  mdFormidable,
  mdKoaBody,
  mdCors,
  mdResHandler,
  mdErrorHandler,
  mdRoute,
  mdRouterAllowed
];