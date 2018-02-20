let Router = require('koa-router');
let insertUser = new Router();

const conn = require('../dbs/connection');

insertUser.post('/insertUser', async function (ctx) {
    ctx.body = await conn.insertData([ctx.request.body.name, ctx.request.body.pass]);
});

module.exports = insertUser;