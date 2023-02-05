const { perfis } = require('../services/PerfilService');

module.exports = {

  autenticar: (req, res) => {
    let usuario = req.body;

    if(usuario.email && usuario.senha){

      let usuarioEncontrado = perfis.find((perfil) => 
        perfil.usuario.email == usuario.email &&
        perfil.usuario.senha == usuario.senha);

      if(usuarioEncontrado){
        let response = {};
        response.perfil = usuarioEncontrado.id;
        response.token = "fabricandoProg";

        return res.json(response);
      }
      res.json({
        message: "Erro ao efetuar Login, Credenciais Inválidas!"
      })
    }
    else{
      res.status(400).json({
        message: "Erro ao efetuar Login, Faltando credenciais!"
      })
    }
  }

}