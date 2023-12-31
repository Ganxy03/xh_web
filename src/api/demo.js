const http = require('http');
const express = require('express');
const mysql = require('mysql2');
const app = express();
// 创建与MySQL数据库的连接
const connection = mysql.createConnection({
    host: '124.221.138.245',
    user: 'test',
    password: '123456',
    database: 'webapi'
});
// 连接到MySQL数据库
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database: ', err);
    } else {
        console.log('Connected to MySQL database');
    }
});
// 设置CORS头部
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
// 创建API路由，处理GET请求
app.get('/api/demo', (req, res) => {
    const query = 'SELECT * FROM 二二年第二学期期末成绩'; // 替换为你的表名
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing MySQL query: ', err);
            res.status(500).json({ error: 'Error executing MySQL query' });
        } else {
            res.json(results);
        }
    });
});
// 创建Node.js服务器并将Express应用程序作为请求处理函数
const server = http.createServer(app);
// 启动服务器，监听端口
server.listen(3300, () => {
    console.log('Server listening on port 3300');
});