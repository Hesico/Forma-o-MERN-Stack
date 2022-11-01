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

var tasks = ["Arrumar quarto", "Comparar roupas"]

app.get("/", (req,res) =>{
    res.render("index" ,{taskList : tasks});
});

app.get("/deletar/:id", (req,res) =>{
    tasks.splice(req.params.id,1);
    res.render("index" ,{taskList : tasks});
});

app.post("/",(req,res) => {
    tasks.push(req.body.tarefa);
    res.render("index" ,{taskList : tasks});
});

app.listen(5000, () => {
    console.log("Server Rodando");
});