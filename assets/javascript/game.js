
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
        this.card = $("#" + this.name)
        this.image = "assets/images/" + this.name + ".jpeg";
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
    characters = {
        Goku : new Hero("Goku", 150, 15),
        Vegeta : new Hero("Vegeta", 130, 25),
        Piccolo : new Hero("Piccolo", 170, 10),
        Yajirobe : new Hero("Yajirobe", 250, 50),
    },

    needDefender : true,
    needPlayer : true,


    // determine if game initiation is outside or within the game object.
initiate : function ( ) {
    game.needDefender = true;
    game.needPlayer = true;

    for (let character of game.characters){
        character.card.on("click", function(character){
            if (game.needPlayer){
                game.addPlayer(character);
                game.moveEnemies();
            }else if (game.needDefender){
                game.addDefender(character);
            }
        });
        };
    $("#attack-button").on("click", function() {
        if (!game.needPlayer & !game.needDefender){
            game.round();
        }
    });
},

addPlayer : function ( ) {
    character.card.addClass("player");
    // character.card.removeClass("inLobby");
    $("player-area").append(character.card);
    // character.isPlayer = true;
    game.player = character;
},

addDefender : function ( ) {
    character.card.addClass("defender");
    // character.card.removeClass("inLobby");
    $("#defender-area").append(character.card);
    // character.isDefender = true;
    game.defender = character;
},

// make sure .remove here doesn't prevent the next line of code adding to the enemy area. = OK (saved by memory)
moveEnemies : function ( ) {
    for (let character of game.characters){
        if (game.player != character){
            character.card.addClass("enemy");
            $("#lobby-area").remove(character.card);
            // character.card.removeClass("inLobby");
            $("#enemy-area").append(character.card);

        }
    }
    
},

round : function ( ) {
    player.attack(defender);
    player.powerUp();
    defender.attack(player);
    if (player.checkDead()) {
        game.Lose ()
    };
    if (defender.checkDead()) {
        game.battleWin ()
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
battleWin : function ( ) {
game.defender.card.hide( );
game.defender = none;
needDefender = true;
},

endGame : function ( ) {
    for (let character of game.characters){
        character.card.off("click");
        };
    $("#attack-button").off("click")
    },

winGame : function ( ) {

},

loseGame : function ( ) {

},

attack : function ( ) {
    $("#attack-button").on("click", function() {
        if (defender.checkDead()) {
            game.initiate( )
        }
        else () {
            game.round( )
        }
    }
},

// 7. Create an "on-click" event attached to the ".letter-button" class.
// $(".letter-button").on("click", function() {

//     // Inside the on-click event...

//     // 8. Create a variable called "fridgeMagnet" and set the variable equal to a new div.
//     var fridgeMagnet = $("<div>");

//     // 9. Give each "fridgeMagnet" the following classes: "letter fridge-color".
//     fridgeMagnet.addClass("letter fridge-color");

//     // 10. Then chain the following code onto the "fridgeMagnet" variable: .text($(this).attr("data-letter"))
//     // attr acts as both a setter and a getter for attributes depending on whether we supply one argument or two
//     // NOTE: There IS a $(data) jQuery method, but it doesn't do what you'd expect. So just use attr.
//     fridgeMagnet.text($(this).attr("data-letter"));

//     // 11. Lastly append the fridgeMagnet variable to the "#display" div (provided);
//     // Again you can see we use that find, and once its found we append the item
//     $("#display").append(fridgeMagnet);

//   }),
};
game.play()