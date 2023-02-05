
const tokenUtil = require('../utils/TokenUtil');

module.exports = {

  verificarCredenciais: (req, res, next) => {
    // utiliza next caso tenha credenciais validas

    const response = tokenUtil.verificarToken(req);

    if(response.autorizado) return next();

    return res.status(401).json({
      message: response.message
    })

  }
}