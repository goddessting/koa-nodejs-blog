let Router = require('koa-router');
let findCommentLength = new Router();

const conn = require('../dbs/connection');

findCommentLength.post('/findCommentLength', async function (ctx) {
    ctx.body = await conn.findCommentLength(ctx.request.body.id);
});

module.exports = findCommentLength;