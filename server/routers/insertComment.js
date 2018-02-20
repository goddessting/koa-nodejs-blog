let Router = require('koa-router');
let insertComment = new Router();

const conn = require('../dbs/connection');

insertComment.post('/insertComment', async function (ctx) {
    ctx.body = await conn.insertComment([ctx.request.body.name, ctx.request.body.content, ctx.request.body.postid]);
});

module.exports = insertComment;