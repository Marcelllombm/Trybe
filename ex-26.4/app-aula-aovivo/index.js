const express = require("express");
const app = express();
const router = express.Router();
const rescue = require('express-rescue');// pacote de tratar erro async
const porta = 3000;

authMiddleware = (req, res, next) =>{
  if(req.headers.authorization){
    next();
  }else{
    res.status(401); // mostrar o erro do servidor
    res.send({
      message: "Token inválido!",
    });
  }
};

logMiddleware = (req,res, next)=>{
  //req.method mostrar o metado que foi usado no caso get
  //req.path caminha da rota que foi chamado
  console.log(`${req.method} : ${req.path}`)
  next();
};

errorMiddleware = (err, req, res, next) =>{
  console.log(err.stack);
  res.status(500).send({
    message: "algum deu errado."
  });
};


// app.use(authMiddleware);
router.use(authMiddleware);
app.use(logMiddleware);

// middleware do express
app.use(express.json());// express vai ser capa manipular o json vindo do body do post

router.get('/dash', function(req, res, next){
  res.send({
    menssage: "Admin Dashboard",
  });
});

app.use('/admin', router);

app.get("/",function(_req,res){
  res.send("seja bem vindo, servidor ok");
});

app.get("/node", function(_req,res){
  res.send({
    message: "Hello world",
  });
});

app.get('/error', rescue( async function(_req, res){
  throw new Error("Errrrror");
}));

app.post('/node', function(req, res){
  console.log(req.body);
  res.send(req.body); // o req.body so existe no verbo post
});

app.use(errorMiddleware); // e preciso usa no final.

app.listen(porta, function(erro){
  if(erro){
    console.log('error de servidor');
  }else{
    console.log('Servidor ok');
  }
});

