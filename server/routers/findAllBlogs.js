let Router = require('koa-router');
let blogs = new Router();

const conn = require('../dbs/connection');

blogs.get('/',async function (ctx){
    ctx.body = await conn.findAllPost();
});

module.exports = blogs;