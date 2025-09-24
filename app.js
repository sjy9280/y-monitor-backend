const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

// // 配置CORS中间件
// app.use(cors({
//   origin: '*', // 允许所有来源，生产环境应指定具体域名
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   credentials: true // 如果需要发送cookie等凭证
// }));

app.use((req, res, next) => {
  // 检查请求的 origin，或者直接设置为你的前端地址
  const allowedOrigin = 'http://localhost:9000';

  res.header('Access-Control-Allow-Origin', allowedOrigin);
  res.header('Access-Control-Allow-Credentials', 'true'); // 关键！
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

  // 处理预检请求 (Preflight Request)
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/errors/upload', (req, res) => {
  res.send(req.body)
});

app.get('/test', (req, res) => {
  console.log('=========res test')
  res.send('done')
})

app.listen(port, () => {
  console.log('HTTPS 服务器运行在端口 3000');
});