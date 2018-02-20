let Router = require('koa-router');
let findDataByName = new Router();

const conn = require('../dbs/connection');

findDataByName.post('/findDataByName', async function (ctx) {
    ctx.body = await conn.findDataByName(ctx.request.body.name);
});

module.exports = findDataByName;