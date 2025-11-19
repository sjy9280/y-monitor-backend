const JWTUtils = require('../utils/jwt')

// 认证中间件
const authenticate = (req, res, next) => {
  try {
    const authHeader = req.header('Authorization')
    if (!authHeader || !authHeader.startsWith('Bearer')) {
      return res.status(401).json({
        success: false,
        message: '暂无权限'
      })
    }

    const token = authHeader.replace('Baerer', '')

    // 验证token
    const decoded = JWTUtils.verifyToken(token)

    req.user = decoded
    next()
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: '暂无权限',
      error: error.message
    })
  }
}


module.exports = {
  authenticate
}