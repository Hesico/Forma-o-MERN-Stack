//utilização do http - Criar servidores
const http = require('http');

// manipulação de arquivos
const fs = require('fs');
fs.writeFile('ola.txt','olá mundo!', (erro) =>{
    if(erro) throw erro;
    console.log("arquivo criado com sucesso");
})

const HOST_NAME = "127.0.0.1";
const PORT = 3000;

console.log("Olá");
/*
//criar novo arquivo (nome do arquivo, conteúdo, callback para ter informações)
fs.writeFile('ola.txt','olá mundo!', (erro) =>{
    if(erro) throw erro;
    console.log("arquivo criado com sucesso");
})
*/

//Cria arquivo ou atualiza existente
fs.appendFile("ola.txt","\n Append content", (erro) => {
    if(erro) throw erro;
    console.log("Conteúdo inserido com sucesso!");
});

//Criar server
//Req = require - Possui imensa gama de informações sobre quem requeriu acesso
const SERVER = http.createServer((req,res) => {

    if(req.url == "/amigos"){
        fs.readFile("index.html",(erro, data) => {
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        })
    }else{
        res.end("errou")
    }
    
});

//listener do server para saber se ta on
SERVER.listen(PORT, HOST_NAME, () =>{
    console.log("O servidor está rodando!!");
});