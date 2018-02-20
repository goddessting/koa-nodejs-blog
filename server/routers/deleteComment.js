let Router = require('koa-router');
let deleteComment = new Router();

const conn = require('../dbs/connection');

deleteComment.post('/deleteComment', async function (ctx) {
    ctx.body = await conn.deleteComment(ctx.request.body.id);
});

module.exports = deleteComment;