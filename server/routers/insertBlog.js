let Router = require('koa-router');
let insertBlog = new Router();

const conn = require('../dbs/connection');

insertBlog.post('/insertBlog', async function (ctx) {
    const moment = new Date().getTime();
    ctx.body = await conn.insertPost([ctx.request.body.name, ctx.request.body.title, ctx.request.body.content, ctx.request.body.uid, moment]);
});

module.exports = insertBlog;