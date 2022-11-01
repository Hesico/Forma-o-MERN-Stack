class Henrique{

    constructor(){
        this.name = "Henrique"
        this.hello();
    }

    hello(){
        console.log("Hello " + this.name);
    }
}

module.exports = Henrique;