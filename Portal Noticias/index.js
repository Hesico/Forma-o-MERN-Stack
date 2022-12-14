const express =  require("express");
const path = require("path");
var bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use("/public", express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname,"/views"));

app.get("/", (req,res) =>{
    console.log(req.query)

    if(!req.query.busca) {
        res.send("HOME");
    }else{
        res.send("voce buscou por: " + req.query.busca)
    }
    
})

app.get("/:slug", (req,res) =>{
    res.send(req.params.slug);
})

app.listen(5000, () => {
    console.log("Server Rodando");
});