
let geraId = 8;
const EntityName = "Perfil";

let self =  module.exports = {

  perfis: [
    {
      usuario: {
        email: "jao@gmail.com",
        senha: "123456"
      },
      id: 1,
      nome: "Joao da silva silvano",
      dataNascimento: "2022-02-14T00:00:00.000Z",
      disponibilidadeMudanca: true,
      disponibilidadeHorario: "Integral",
      educacao: [
        {
          instituicao: "Escola 1",
          ingresso: "2012-02-28T00:00:00.000Z",
          conclusao: "2015-03-28T00:00:00.000Z",
          nivelEscolaridade: "Ensino Superior"
        }
      ],
      certificacoes: [
        {
          instituicao: "High tech cursos",
          titulo: "Fabrica programador",
          cargaHoraria: 80
        }
      ],
      conexoes: []
    },
    {
      usuario: {
        email: "carla@gmail.com",
        senha: "123456"
      },
      id: 2,
      nome: "carla da materaso",
      dataNascimento: "2022-02-14T00:00:00.000Z",
      disponibilidadeMudanca: true,
      disponibilidadeHorario: "Integral",
      educacao: [
        {
          instituicao: "Escola 1",
          ingresso: "2012-02-28T00:00:00.000Z",
          conclusao: "2015-03-28T00:00:00.000Z",
          nivelEscolaridade: "Ensino Superior"
        }
      ],
      certificacoes: [
        {
          instituicao: "High tech cursos",
          titulo: "Fabrica programador",
          cargaHoraria: 80
        }
      ],
      conexoes: []
    },
    {
      usuario: {
        email: "joaokle@gmail.com",
        senha: "12345"
      },
      id: 3,
      nome: "joao kleber",
      dataNascimento: "2022-02-14T00:00:00.000Z",
      disponibilidadeMudanca: true,
      disponibilidadeHorario: "Integral",
      educacao: [
        {
          instituicao: "Escola 1",
          ingresso: "2012-02-28T00:00:00.000Z",
          conclusao: "2015-03-28T00:00:00.000Z",
          nivelEscolaridade: "Ensino Superior"
        }
      ],
      certificacoes: [
        {
          instituicao: "High tech cursos",
          titulo: "Fabrica programador",
          cargaHoraria: 80
        }
      ],
      conexoes: []
    },
    {
      usuario: {
        email: "vito@gmail.com",
        senha: "12345"
      },
      id: 4,
      nome: "vitor hugo",
      dataNascimento: "2022-02-14T00:00:00.000Z",
      disponibilidadeMudanca: true,
      disponibilidadeHorario: "Integral",
      educacao: [
        {
          instituicao: "Escola 1",
          ingresso: "2012-02-28T00:00:00.000Z",
          conclusao: "2015-03-28T00:00:00.000Z",
          nivelEscolaridade: "Ensino Superior"
        }
      ],
      certificacoes: [
        {
          instituicao: "High tech cursos",
          titulo: "Fabrica programador",
          cargaHoraria: 80
        }
      ],
      conexoes: []
    },
    {
      usuario: {
        email: "mathna@gmail.com",
        senha: "12345"
      },
      id: 5,
      nome: "matheus nascimento",
      dataNascimento: "2022-02-14T00:00:00.000Z",
      disponibilidadeMudanca: true,
      disponibilidadeHorario: "Integral",
      educacao: [
        {
          instituicao: "Escola 1",
          ingresso: "2012-02-28T00:00:00.000Z",
          conclusao: "2015-03-28T00:00:00.000Z",
          nivelEscolaridade: "Ensino Superior"
        }
      ],
      certificacoes: [
        {
          instituicao: "High tech cursos",
          titulo: "Fabrica programador",
          cargaHoraria: 80
        }
      ],
      conexoes: []
    },
    {
      usuario: {
        email: "samara@gmail.com",
        senha: "12345"
      },
      id: 6,
      nome: "samara xiz",
      dataNascimento: "2022-02-14T00:00:00.000Z",
      disponibilidadeMudanca: true,
      disponibilidadeHorario: "Integral",
      educacao: [
        {
          instituicao: "Escola 1",
          ingresso: "2012-02-28T00:00:00.000Z",
          conclusao: "2015-03-28T00:00:00.000Z",
          nivelEscolaridade: "Ensino Superior"
        }
      ],
      certificacoes: [
        {
          instituicao: "High tech cursos",
          titulo: "Fabrica programador",
          cargaHoraria: 80
        }
      ],
      conexoes: []
    },
    {
      usuario: {
        email: "kakazinho@gmail.com",
        senha: "1234"
      },
      id: 7,
      nome: "kaka vernek",
      dataNascimento: "2022-02-14T00:00:00.000Z",
      disponibilidadeMudanca: true,
      disponibilidadeHorario: "Integral",
      educacao: [
        {
          instituicao: "Escola 1",
          ingresso: "2012-02-28T00:00:00.000Z",
          conclusao: "2015-03-28T00:00:00.000Z",
          nivelEscolaridade: "Ensino Superior"
        }
      ],
      certificacoes: [
        {
          instituicao: "High tech cursos",
          titulo: "Fabrica programador",
          cargaHoraria: 80
        }
      ],
      conexoes: []
    },
  ],


  buscarUltimosPerfis: (req, res) => {
    res.json(self.perfis.length > 5 ? self.perfis.slice(self.perfis.length - 5) : self.perfis);
  },

  buscarPerfilPorId: (req, res) => { // route Params
    let perfilID = req.params.id;
    let perfilEncontrado = self.perfis.find(perfil => perfil.id == perfilID);
    if(perfilEncontrado)
      res.json(perfilEncontrado);
    else 
      res.status(400).json({
        message: `Erro ao buscar ${EntityName}, Objeto não encontrado`
      });
  },

  cadastrarPerfil: (req, res) => {
    let novoPerfil = req.body; // Req.body vem Json precisa ser converttido em 
                              // Objeto JS/Node, router.use(express.json());                            
    if(novoPerfil){
      novoPerfil.id = geraId;
      self.perfis.push(novoPerfil);
      geraId++;
      res.json(novoPerfil);
    }
    else{
      res.status(400).json({
        message: `"Erro ao cadastrar ${EntityName}, Dados incompletos`
      })
    }
  },

  editarPerfil: (req, res) => {
    let idPerfil = req.params.id;
    let perfilEditado = req.body;
  
    if(perfilEditado && perfilEditado.usuario){
      let indicePerfil = self.perfis.findIndex(perfil => perfil.id == idPerfil);
  
      if(indicePerfil !== -1){
        let perfilRetornoAnterior = self.perfis[indicePerfil];
        perfilEditado.id = JSON.parse(idPerfil);
        self.perfis.splice(indicePerfil, 1 , perfilEditado)
        res.json(perfilRetornoAnterior);
      }
      else{
        res.json({
          message: `Erro ao editar ${EntityName}, Perfil nao encontrado`
        })
      }
    }
    else{
      res.status(400).json({
        message: `Erro ao editar ${EntityName}, Dados incompletos`
      })
    }
  },

  conectarPerfis: (req, res) => {
    let perfilRemetenteId = req.body.remetente; 
    let perfilDestinatarioId = req.body.destinatario;
  
    if(!req.body.remetente || !req.body.destinatario){
      return res.status(400).json({
        message: "Erro ao definir Conexao, Dados incompletos"
      })
    }
    if(perfilRemetenteId && perfilDestinatarioId){
      if(perfilRemetenteId == perfilDestinatarioId){
        return res.status(400).json({
          message: `Erro ao definir conexao, Um ${EntityName} não pode conectar-se a si mesmo`
        })
      }
      let remetente = self.perfis.find(perfil => perfil.id == perfilRemetenteId);
      let destinatario = self.perfis.find(perfil => perfil.id == perfilDestinatarioId);
      // find funciona como ponteiro, entao nao necessario findIndex..
  
      if(remetente && destinatario){
        remetente.conexoes.push(perfilDestinatarioId);
        destinatario.conexoes.push(perfilRemetenteId);
        res.json({
          message: "Conexao definida com sucesso!"
        });
      }
      else{
        res.json({
          message: `Erro ao definir Conexao, ${EntityName} não encontrado`
        })
      }
    }
  },

}



