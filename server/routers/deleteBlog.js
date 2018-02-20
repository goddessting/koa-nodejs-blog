let Router = require('koa-router');
let deleteBlog = new Router();

const conn = require('../dbs/connection');

deleteBlog.post('/deleteBlog', async function (ctx) {
    ctx.body = await conn.deletePost(ctx.request.body.id);
});

module.exports = deleteBlog;