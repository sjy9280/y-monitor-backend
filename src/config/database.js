const { Sequelize } = require('sequelize')
const dbConfig = require('./db.config')

class Database {
  constructor() {
    this.sequelize = null;
    this.connect()
  }


  async connect() {
    try {
      this.sequelize = new Sequelize(
        dbConfig.DB,
        dbConfig.USER,
        dbConfig.PASSWORD,
        {
          host: dbConfig.HOST,
          dialect: 'mysql'
        }
      )
      await this.sequelize.authenticate()
      console.log('✅ MySQL 连接成功');
      console.log(`📊 数据库: ${dbConfig.DB}`);
      console.log(`🏠 主机: ${dbConfig.HOST}`);
    } catch (error) {
      console.error('❌ MySQL 连接失败:', error);
      process.exit(1);
    }
  }
}

const database = new Database()
module.exports = database