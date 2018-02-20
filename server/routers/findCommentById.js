let Router = require('koa-router');
let findCommentById = new Router();

const conn = require('../dbs/connection');

findCommentById.post('/findCommentById', async function (ctx) {
    ctx.body = await conn.findCommentById(ctx.request.body.id);
});

module.exports = findCommentById;