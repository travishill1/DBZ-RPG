
// We create a constructor as a template for all character objects to call upon during game initialization.
class Hero {
	constructor(name, health, baseAttack) {
		this.name = name;
        this.health = health;
        this.baseAttack = baseAttack;
		this.attackPower = baseAttack;
		this.isPlayer = false;
        this.isDefender = false;
        this.isDead = false;
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
    round ( ) {
        
    }
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

    // determine if game initiation is outside or within the game object.
Initiate : function ( ) {
    this.characters = [
        Goku = new Hero("Goku", 150, 15),
        Vegeta = new Hero("Vegeta", 130, 25),
        Piccolo = new Hero("Piccolo", 170, 10),
        Yajirobe = new Hero("Yajirobe", 250, 50),
    ]
},

Round : function ( ) {
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

CheckBattleEnd : function ( ) {
    if 
},

// need game win, battle win, and battle loss.  no game loss because === battle loss.

battleWin : function ( ) {

},

Lose : function ( ) {

},

Win : function ( ) {

},

Battle : function ( ) {

}
}
game.play()