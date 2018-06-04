"use strict"

class Animal{
	constructor(numOfLeg= 2, blood= warm, type){
		this.numOfLeg = numOfLeg,
		this.blood = `${blood} blooded`
		this.type = type
	}
}


class SuperPower {
  constructor() {

  }

  LaserVision() {
    console.log("Zzzzzzzzzzzz. Haha now you can't do anything");
  }

 Invisible() {
    console.log("Haaaa Puff,, You can't see me..");
  }

  NeutralizingToxin(){
  	console.log(`Haha! You can't kill me with that stupid poison`)
  }
}

class Bat extends Animal {
  constructor(numOfLeg, blood, type) {
    super(numOfLeg, blood, type);
    this.superPower = new SuperPower();
  }
}

class Chimpanzee extends Animal {
  constructor(numOfLeg, blood, type) {
    super(numOfLeg, blood, type);
    this.superPower = new SuperPower();
  }
}

class Fox extends Animal {
  constructor(numOfLeg, blood, type) {
    super(numOfLeg, blood, type);
    this.superPower = new SuperPower();
  }
}

class Chicken extends Animal {
  constructor(numOfLeg, blood, type) {
    super(numOfLeg, blood, type);
    this.superPower = new SuperPower();
  }
}

let hewan = new Animal();
console.log(hewan.num_legs); // 2
console.log("\n");

let ayamJago = new Chicken();
console.log(ayamJago.num_legs); // 2
console.log(ayamJago.is_warm_blooded); // true
console.log("\n");

let kodok = new Frog(4, false);
console.log(kodok.num_legs); // 4
console.log(kodok.is_warm_blooded); // false
console.log("\n");

let grayFox = new Fox(4, true);
console.log(grayFox.num_legs); // 4
console.log(grayFox.is_warm_blooded); // true
grayFox.superPower.use_laser_vision(); // Laser
console.log("\n");

