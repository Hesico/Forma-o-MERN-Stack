const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');

const path = require('path');

const app = express();

mongoose.connect('mongodb+srv://hesico:jwwoeplfZp24tC7A@cluster0.bg5hfgr.mongodb.net/?retryWrites=true&w=majority'
    ,{useNewUrlParser: true, useUnifiedTopology: true}
    ).then(() => {

    console.log("Conectado com Sucesso!");
}).catch((e) => {

    console.log(e.message);
})

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/pages'));


app.get('/',(req,res)=>{
    
    if(req.query.busca == null){
        res.render('home',{});
    }else{
        res.render('busca',{});
    }

  
});


app.get('/:slug',(req,res)=>{
    //res.send(req.params.slug);
    res.render('single',{});
})



app.listen(5000,()=>{
    console.log('server rodando!');
})