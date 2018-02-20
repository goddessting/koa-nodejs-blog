const Koa = require('koa');
const app = new Koa();

const bodyParser = require('koa-bodyparser');

app.use(bodyParser());

const config = require('./config');

const blogs = require('./server/routers/findAllBlogs');
const insertUser = require('./server/routers/insertUser');
const findDataByName = require('./server/routers/findDataByName');
const findDataById = require('./server/routers/findDataById');
const findDataByUser = require('./server/routers/findDataByUser');
const insertBlog = require('./server/routers/insertBlog');
const insertComment = require('./server/routers/insertComment');
const findCommentById = require('./server/routers/findCommentById');
const updateBlog = require('./server/routers/updateBlog');
const deleteBlog = require('./server/routers/deleteBlog');
const deleteComment = require('./server/routers/deleteComment');
const findCommentLength = require('./server/routers/findCommentLength');
const updateBlogComment = require('./server/routers/updateBlogComment');
const deleteAllBlogComment = require('./server/routers/deleteAllBlogComment');
const updateBlogPv = require('./server/routers/updateBlogPv');

app.use(blogs.routes()).use(blogs.allowedMethods());
app.use(insertUser.routes()).use(insertUser.allowedMethods());
app.use(findDataByName.routes()).use(findDataByName.allowedMethods());
app.use(findDataById.routes()).use(findDataById.allowedMethods());
app.use(findDataByUser.routes()).use(findDataByUser.allowedMethods());
app.use(insertBlog.routes()).use(insertBlog.allowedMethods());
app.use(insertComment.routes()).use(insertComment.allowedMethods());
app.use(findCommentById.routes()).use(findCommentById.allowedMethods());
app.use(updateBlog.routes()).use(updateBlog.allowedMethods());
app.use(deleteBlog.routes()).use(deleteBlog.allowedMethods());
app.use(deleteComment.routes()).use(deleteComment.allowedMethods());
app.use(findCommentLength.routes()).use(findCommentLength.allowedMethods());
app.use(updateBlogComment.routes()).use(updateBlogComment.allowedMethods());
app.use(deleteAllBlogComment.routes()).use(deleteAllBlogComment.allowedMethods());
app.use(updateBlogPv.routes()).use(updateBlogPv.allowedMethods());

app.listen(config.port);