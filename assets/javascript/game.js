
// We create a constructor as a template for all character objects.
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
    attack ( ) {
        this.health -= this.attackPower;
    }

    // 
    round ( ) {
        
    }

    checkDead ( ) {
        if (this.health <= 0) {
        this.isDead = true;
        }
        return this.isDead;
    }


}


const game = { 

Initiate : function ( ) {
    Goku = new Hero("Goku", 150, 15);
    Vegeta = new Hero("Vegeta", 130, 25);
    Piccolo = new Hero("Piccolo", 170, 10);
    Yajirobe = new Hero("Yajirobe", 250, 50);
},

Round : function ( ) {
    player.attack(defender);
    player.powerUp();
    defender.attack(player);
    if (defender.checkDead()) {
        game.Lose ()
    }
},

Battle : function ( ) {

}
}
