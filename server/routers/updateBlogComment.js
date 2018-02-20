let Router = require('koa-router');
let updateBlogComment = new Router();

const conn = require('../dbs/connection');

updateBlogComment.post('/updateBlogComment', async function (ctx) {
    ctx.body = await conn.updatePostComment([ctx.request.body.comments, ctx.request.body.id]);
});

module.exports = updateBlogComment;