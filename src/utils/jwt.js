const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const JWT_SECRET = process.env.JWT_SECRET || 'K7$gH!2@pQ9#vR5&mX8*yB4%wE6^zS3-dF1_cJ0+nA'
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';


class JWTUtils {
  // 生成token
  static generateToken(payload) {
    return jwt.sign(payload, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN
    })
  }

  // 验证token
  static verifyToken(token) {
    try {
      return jwt.verify(token, JWT_SECRET)
    } catch (error) {
      throw new Error('无效token')
    }
  }

  // 解码token（不验证）
  static decodeToken(token) {
    return jwt.decode(token)
  }


  // 生成刷新token
  static genrateRefreshToken(payload) {
    return jwt.sign(payload, JWT_SECRET, {
      expiresIn: '15d'
    })
  }

  // 密码加密
  static async hashPassword(password) {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  }

  // 密码验证
  static async comparePassword(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword)
  }
}

module.exports = JWTUtils