let Router = require('koa-router');
let findDataById = new Router();

const conn = require('../dbs/connection');

findDataById.post('/findDataById', async function (ctx) {
    ctx.body = await conn.findDataById(ctx.request.body.id);
});

module.exports = findDataById;