
module.exports = {

  verificarToken: (request) => {
    let token = request.headers['token'];

    let response = {
      autorizado: false,
      message: "Ops ocorreu um erro..."
    };

    if(!token){
      response.autorizado = false;
      response.message = `Erro ao acessar Recurso: Token não informado!`;
    }
    else if(token !== 'fabricandoProg'){
      response.autorizado = false;
      response.message = `Erro ao acessar Recurso: Token Inválido!`;
    }
    else if(token == 'fabricandoProg'){
      response.autorizado = true;
      response.message = ``;
    }
    return response;
  },
}