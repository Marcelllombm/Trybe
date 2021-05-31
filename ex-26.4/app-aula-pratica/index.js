const express = require("express");
const simpsons = require("./routes/simpsons");
const middlewares = require("./middlewares")

const app = express();
const porta = 3000;

app.get("/", (req, res)=>{
res.send({
  message: "Projeto Trybe",
})
})

app.use(express.json());// quando eu quero middlewares ou função nativa para injetar no meu conteudo
app.use(middlewares.logMiddleware);
app.use('/simpsons', simpsons);

app.use(middlewares.errorMiddleware);

app.listen(porta, function(erro){
  if(erro){
    console.log("error no servidor");
  }else{
    console.log("Servidor da porta 3000, Ok!!!");
  }
});

// site de codigo de erro
// https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status

// methods
//https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods
