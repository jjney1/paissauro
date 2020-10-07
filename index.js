//Importar a biblioteca express 
var express = require("express");
// var mongo = require("mongodb");
//Iniciando a importação da biblioteca
var app = express();
// var mongo = mongo();

//Chamada na porta 3000 para iniciar o servidor 
app.listen(3000, () => {
 console.log("Server running on port 3000");
}); 

app.get("/url", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

app.get("/save",(req,res,next) => {
    //salvar contato via JSON que veio do HTML
    //mongo.save(req.json);
    res.json("O Fábio é 10");
});

//Vou sair da sua máquina 
//Tá funcionando 
