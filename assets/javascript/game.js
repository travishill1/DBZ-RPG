
   var audioPunch = document.createElement("audio");
   audioPunch.setAttribute("src", "assets/Punch.mp3");

   var audioTheme = document.createElement("audio");
    audioTheme.setAttribute("src", "assets/themesong.mp3");

    // Theme Button
    $(".theme-button").on("click", function() {
      audioTheme.play();
    });
    $(".pause-button").on("click", function() {
      audioTheme.pause();
    });

 // We create a constructor as a template for all character objects to call upon during game initialization.
class Hero {
	constructor(name, health, baseAttack) {
		this.name = name;
        this.health = health;
        this.baseAttack = baseAttack;
		this.attackPower = baseAttack;
		// this.isPlayer = false;
        // this.isDefender = false;
        this.isDead = false;

        
        let imageURL = "assets/images/" + this.name + ".jpg";
        let card = $("<div>");
        card.addClass("card");
        card.addClass("col-3");
        card.append("<p class='nameText'>" + this.name + "</p>");
        card.append("<img class ='cardImage' src='" + imageURL + "'>");
        card.append("<p class='hp'>" + this.health + "</p>");
        card.appendTo("#lobby-area");

        this.card = card;
    }


    // increments the current attackPower with the baseAttack.
    powerUp ( ) {
        this.attackPower += this.baseAttack;
    }

    // subtracts current attackPower from health.
    attack (opponent) {
        opponent.health -= this.attackPower;
    }

    // 
   
    // if health drops to 0 or below, then change isDead boolean to true.  Return this function so that we can apply other functions now to that object.
    checkDead ( ) {
        if (this.health <= 0) {
        this.isDead = true;
        }
        return this.isDead;
    }


}


// game object where rounds, battles, checks, and win/lose conditions are settled.
const game = { 

    needDefender : true,
    needPlayer : true,

    // determine if game initiation is outside or within the game object.
initiate : function () {

    game.characters = [
        new Hero("Goku", 150, 15),
        new Hero("Vegeta", 130, 25),
        new Hero("Piccolo", 170, 10),
        new Hero("Yajirobe", 250, 50),
    ],

    game.needDefender = true;
    game.needPlayer = true;
    game.addListeners();
    $("#message").empty();
    
    $("#attack-button").on("click", function() {
        if (!game.needPlayer & !game.needDefender){
            game.round();
            audioPunch.play();
        }
    });
},

addListeners : function(){
    for (let i in game.characters){
        character = game.characters[i];
        character.card.on("click", function(){
            if (game.needPlayer){
                game.addPlayer(game.characters[i]);
                game.moveEnemies();
            }else if (game.needDefender){
                game.addDefender(game.characters[i]);
            }
        });
    }
},

addPlayer : function(character) {
    character.card.addClass("player");
    character.card.remove();
    $("#player-area").append(character.card);
    game.addListeners();
    game.player = character;
    game.needPlayer = false;
    $(".characterSelection").remove();
    character.card.removeClass("col-3");
    character.card.addClass("col-10");
},

moveEnemies : function() {
    for (let character of game.characters){
        if (game.player != character){
            character.card.addClass("enemy");
            character.card.remove();
            $("#enemy-area").append(character.card);
            game.addListeners();
        }
    }   
},

addDefender : function(character){
    if (character != game.player){
    character.card.addClass("defender");
    game.defender = character;
    character.card.remove();
    $("#defender-area").append(character.card);
    game.needDefender = false;
    game.addListeners();
    character.card.removeClass("col-3");
    character.card.addClass("col-10");
    }
},

// make sure .remove here doesn't prevent the next line of code adding to the enemy area. = OK (saved by memory)


round : function(){
    game.player.attack(game.defender);
    game.player.powerUp();
    game.defender.attack(game.player);
    game.player.card.find(".hp").text(game.player.health);
    game.defender.card.find(".hp").text(game.defender.health);
    // game.checkBattleEnd();
    if (game.defender.checkDead()) {
        game.battleWin ()
    };
    if (game.player.checkDead()) {
        game.loseGame ()
    };
},

// *************************
// might not be needed due to including it in round at the end.
// CheckBattleEnd : function ( ) {
//     if (player.checkDead()) {
//         game.Lose ()
//     };
//     if (defender.checkDead()) {
//         game.battleWin ()
//     };
// },
// **************************


// need game win, battle win, and battle loss.  no game loss because === battle loss.
battleWin : function(){
game.defender.card.remove();
game.defender = null;
game.needDefender = true;
},

createButton : function(){
    let button = $("<button>");
    button.text("New Game");
    button.addClass("btn btn-dark btn-lg");
    button.attr('id', 'reset-button');
    button.on("click", function(){
        game.resetGame();
        game.initiate();
    })
    return button;
},

loseGame : function(){
    $("#message").append("<h2>You Lose!</h2>")
    $("#message").append(game.createButton());
},

winGame : function(){
    $("#message").append("<h2>You Win!</h2>")
    $("#message").append(game.createButton());
},

resetGame : function(){
    for (let character of game.characters){
        character.card.off("click");
    }

    $("#attack-button").off("click");
    game.player.card.remove();
    game.player = null;
    $("#reset-button").remove();
}
}

game.initiate();