const { Sequelize } = require('sequelize')
const dbConfig = require('./db.config')

class Database {
  constructor() {
    this.sequelize = null;

  }


  async connect(){
    try{
      this.sequelize = new Sequelize(
        
      )
    }
  }
}