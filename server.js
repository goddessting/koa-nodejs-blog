const Koa = require('koa');
const app = new Koa();

const insertBlog = require('./server/routers/insertBlog');

const Router = require('koa-router');
const router = new Router();

const config = require('./config');

router.use('/',insertBlog.routes(),insertBlog.allowedMethods());

app.use(router.routes()).use(router.allowedMethods());

app.listen(config.port);