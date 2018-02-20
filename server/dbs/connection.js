const mysql = require('mysql');
const config = require('../../config');

let pool = mysql.createPool({
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    database: config.database.database,
    port: config.database.port
});

let query = function (sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                resolve(err);
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows)
                    }
                    connection.release();
                })
            }
        })
    })
};

let users = `create table if not exists users(
 id INT NOT NULL AUTO_INCREMENT,
 name VARCHAR(100) NOT NULL,
 pass VARCHAR(40) NOT NULL,
 PRIMARY KEY ( id )
);`;

let posts = `create table if not exists posts(
 id INT NOT NULL AUTO_INCREMENT,
 name VARCHAR(100) NOT NULL,
 title VARCHAR(40) NOT NULL,
 content  VARCHAR(40) NOT NULL,
 uid  VARCHAR(40) NOT NULL,
 moment  VARCHAR(40) NOT NULL,
 comments  VARCHAR(40) NOT NULL DEFAULT '0',
 pv  VARCHAR(40) NOT NULL DEFAULT '0',
 PRIMARY KEY ( id )
);`;

let comment = `create table if not exists comment(
 id INT NOT NULL AUTO_INCREMENT,
 name VARCHAR(100) NOT NULL,
 content VARCHAR(40) NOT NULL,
 postid VARCHAR(40) NOT NULL,
 PRIMARY KEY ( id )
);`;

let createTable = function (sql) {
    return query(sql, []);
};

createTable(users);
createTable(posts);
createTable(comment);

let insertData = function (value) {
    let _sql = "insert into users(name,pass) values(?,?);";
    return query(_sql, value);
};

let insertPost = function (value) {
    let _sql = "insert into posts(name, title, content, uid, moment) values(?,?,?,?,?);";
    return query(_sql, value);
};

let updatePostComment = function (value) {
    let _sql = "update posts set comment=? where id=?";
    return query(_sql, value);
};

let updatePostPv = function (value) {
    let _sql = "update posts set pv=? where id=? ";
    return query(_sql, value);
};

let insertComment = function (value) {
    let _sql = "insert into comment(name, content, postid) values(?,?,?);";
    return query(_sql, value);
};

let findDataByName = function (name) {
    let _sql = `select * from users where name="${name}"`;
    return query(_sql);
};

let findDataByUser = function (name) {
    let _sql = `select * from posts where name="${name}"`;
    return query(_sql);
};

let findDataById = function (id) {
    let _sql = `select * from posts where id="${id}"`;
    return query(_sql);
};

let findCommentById = function (id) {
    let _sql = `select * from comment where postid="${id}"`;
    return query(_sql);
};

let findAllPost = function () {
    let _sql = `select * from posts`;
    return query(_sql);
};

let updatePost = function (values) {
    let _sql = `update posts set title=?,content=? where id=?`;
    return query(_sql, values);
};

let deletePost = function (id) {
    let _sql = `delete from posts where id=?`;
    return query(_sql, id);
};

let deleteComment = function (id) {
    let _sql = `delete from comment where id = ${id}`;
    return query(_sql);
};

let deleteAllPostComment = function (id) {
    let _sql = `delete from comment where postid = ?`;
    return query(_sql, id);
};

let findCommentLength = function (id) {
    let _sql = `select content from comment where postid in (select id from posts where id=${id})`;
    return query(_sql);
};

module.exports = {
    query,
    createTable,
    insertData,
    findDataByName,
    findDataById,
    findDataByUser,
    insertPost,
    findAllPost,
    insertComment,
    findCommentById,
    updatePost,
    deletePost,
    deleteComment,
    findCommentLength,
    updatePostComment,
    deleteAllPostComment,
    updatePostPv
};
