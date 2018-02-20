let Router = require('koa-router');
let updateBlog = new Router();

const conn = require('../dbs/connection');

updateBlog.post('/updateBlog', async function (ctx) {
    ctx.body = await conn.updatePost([ctx.request.body.title, ctx.request.body.content, ctx.request.body.id]);
});

module.exports = updateBlog;