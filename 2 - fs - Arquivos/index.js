const fs = require('fs');

//Ler arquivo - data vem como buffer => transformar para string;
/*
fs.readFile("ex.txt",(erro,data) => {
    if (erro) throw erro;
    let str = data.toString();
    str = str.split("/")
    console.log(str);
})
*/

//Deleta arquivo
//fs.unlink("ex.txt",() => {});

//Renomear (atualmente,novo)
fs.rename("ola.txt","ex.txt", () => {});