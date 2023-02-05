
let geraId = 4;

let notificacoes = [
  {
    id: 1,
    tipo: "Contato", // Enum
    titulo: "Notificacao 1",
    descricao: "Esta é uma notificacao 1",
    lida: false,
    remetente: 2, // id
    destinatario: 3 // id
  },
  {
    id: 2,
    tipo: "Solicitação de Amizade",
    titulo: "Notificacao 2",
    descricao: "Esta é uma notificacao 2",
    lida: false,
    remetente: 3,
    destinatario: 4
  },
  {
    id: 3,
    tipo: "Contato",
    titulo: "Notificacao 3",
    descricao: "Esta é uma notificacao 3",
    lida: false,
    remetente: 4,
    destinatario: 5
  },
]


const EntityName = "Notificação";
//const perfilService = require('../services/PerfilService');

module.exports = {

  buscarNotificacaoPorId: (req, res) => { // route Params
    let notificacaoID = req.params.id;
    let notificacaoEncontrada = notificacoes.find(notificacao => notificacao.id == notificacaoID);
    if(notificacaoEncontrada)
      res.json(notificacaoEncontrada);
    else 
      res.json({
        message: `Erro ao buscar ${EntityName}, Objeto não encontrada`
      });
  },

  buscarNotificacaoPorPerfilId: (req, res) => {
    let IdPerfil = req.params.id;

    let notificacoesList = notificacoes.filter(notificacao => 
        notificacao.destinatario == IdPerfil || notificacao.remetente == IdPerfil);
    // Se ele recebeu ou enviou uma notificacao

    res.json(notificacoesList); // caso nao haja devolve []

  },

  cadastrarNotificacao: (req, res) => {
    let novaNotificacao = req.body; // Req.body vem Json precisa ser converttido em 
                              // Objeto JS/Node, router.use(express.json());                            
    if(novaNotificacao){
      novaNotificacao.id = geraId;
      notificacoes.push(novaNotificacao);
      geraId++;
      res.json(novaNotificacao);
    }
    else{
      res.status(400).json({
        message: `Erro ao cadastrar ${EntityName}, Dados incompletos`
      })
    }
  },

  marcarNotificacaoComoLida: (req, res) => {
    let idNotificacao = req.params.id;

    let notificacaoEncontrada = notificacoes.find(notificacao => notificacao.id == idNotificacao);

    if(notificacaoEncontrada){
      if(notificacaoEncontrada.lida == false){
        notificacaoEncontrada.lida = true;
        return res.json({
          message: `${EntityName} marcada como lida`
        });
      }
    res.json({
      message: `${EntityName} ja marcada como lida`
    });      
    }
    else{
      res.json({
        message: `Erro ao Marcar ${EntityName} como lida, ${EntityName} nao encontrada`
      })
    }
  },

}