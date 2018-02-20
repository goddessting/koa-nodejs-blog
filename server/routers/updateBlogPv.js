let Router = require('koa-router');
let updateBlogPv = new Router();

const conn = require('../dbs/connection');

updateBlogPv.post('/updateBlogPv', async function (ctx) {
    ctx.body = await conn.updatePostPv([ctx.request.body.pv, ctx.request.body.id]);
});

module.exports = updateBlogPv;