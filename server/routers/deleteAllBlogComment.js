let Router = require('koa-router');
let deleteAllBlogComment = new Router();

const conn = require('../dbs/connection');

deleteAllBlogComment.post('/deleteAllBlogComment', async function (ctx) {
    ctx.body = await conn.deleteAllPostComment(ctx.request.body.id);
});

module.exports = deleteAllBlogComment;