let Router = require('koa-router');
let myRouter = new Router();

const conn = require('../dbs/connection');

myRouter.get('/',async function (ctx){
    ctx.body = await conn.findAllPost();
});

module.exports = myRouter;