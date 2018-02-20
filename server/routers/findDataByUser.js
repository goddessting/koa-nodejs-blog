let Router = require('koa-router');
let findDataByUser = new Router();

const conn = require('../dbs/connection');

findDataByUser.post('/findDataByUser', async function (ctx) {
    ctx.body = await conn.findDataByUser(ctx.request.body.name);
});

module.exports = findDataByUser;