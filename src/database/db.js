const mysql = require('mysql2')
const dbConfig = require('../config/db.config')

const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
})

connection.connect((err) => {
  if (err) {
    console.error('======y log', '连接数据库失败', err)
    return
  }

  console.log('======y log', '连接数据库成功')
})

module.exports = connection