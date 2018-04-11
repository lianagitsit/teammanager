var inquirer = require('inquirer');
var count = 0;
var players = [];
var score = 0;

function Player(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
    this.goodGame = function () {
        if (Math.floor(Math.random() * 2) === 0) {
            this.offense += 2;
            console.log("Yay! Offense is now", this.offense);
        } else {
            this.defense += 2;
            console.log("Yay! Defense is now", this.defense);
        }
    };
    this.badGame = function () {
        if (Math.floor(Math.random() * 2) === 0) {
            this.offense -= 2;
            console.log("Boo! Offense is now", this.offense);
        } else {
            this.defense -= 2;
            console.log("Boo! Defense is now", this.defense);
        }
    };;
    this.printStats = function () {
        console.log("Name: " + this.name + "\nPosition: " + this.position + "\nOffense: " + this.offense + "\nDefense: " + this.defense);
    }
}

// var jessica = new Player("Jessica Jones", "Crusher", 6, 10)
// jessica.printStats();

function getNewPlayer() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the player's name?",
            name: "player"
        },
        {
            type: "input",
            message: "What is the player's position?",
            name: "position"
        },
        {
            type: "input",
            message: "What is the player's offense?",
            name: "offense"
        },
        {
            type: "input",
            message: "What is the player's defense?",
            name: "defense"
        }
    ]).then(answers => {
        var char = new Player(answers.player, answers.position, parseInt(answers.offense), parseInt(answers.defense));
        players.push(char);
        // console.log(players);
        console.log(answers.player, "added");
        if (count < 2) {
            count++;
            getNewPlayer();
        } else {
            for (var i = 0; i < players.length; i++) {
                console.log("loop");
                players[i].printStats();
            }
            playGame();
        }
    })
}

function playGame(){
    console.log("Game on");
    var num1 = Math.floor(Math.random() * 20);
    var num2 = Math.floor(Math.random() * 20);

    var starters = [players[0], players[1]];
    var sub = [players[3]];

    var teamDefense = starters[0].defense + starters[1].defense;
    var teamOffense = starters[0].offense + starters[1].offense;

    if (num1 < teamOffense){
        score += 1;
        console.log("YAY! SCORE:", score);
    }

    if (num2 > teamDefense){
        score -= 1;
        console.log("BOO! SCORE:", score);
    }

}


getNewPlayer();




