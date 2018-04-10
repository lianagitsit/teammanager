function Player(name, position, offense, defense){
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
    this.goodGame = function(){
        if(Math.floor(Math.random() * 2) === 0){
            offense += 2;
            console.log("Yay! Offense is now", this.offense);
        } else {
            defense += 2;
            console.log("Yay! Defense is now", this.defense);
        }
    };
    this.badGame = function(){
        if(Math.floor(Math.random() * 2) === 0){
            offense -= 2;
            console.log("Boo! Offense is now", this.offense);
        } else {
            defense -= 2;
            console.log("Boo! Defense is now", this.defense);
        }
    };;
    this.printStats = function(){
        console.log("Name: " + this.name + "\nPosition: " + this.position + "\nOffense: " + this.offense + "\nDefense: " + this.defense);
    }
}

var jessica = new Player("Jessica Jones", "Crusher", 6, 10)
jessica.printStats();