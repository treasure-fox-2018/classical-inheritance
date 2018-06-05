"use strict"

class Animal{
	constructor(numOfLeg= 2, is_warm_blooded= true){
		this.numOfLeg = numOfLeg,
		this.is_warm_blooded = is_warm_blooded
		
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
  constructor(numOfLeg, is_warm_blooded) {
    super(numOfLeg, is_warm_blooded);
    this.superPower = new SuperPower();
  }
}

class Chimpanzee extends Animal {
  constructor(numOfLeg, is_warm_blooded) {
    super(numOfLeg, is_warm_blooded);
    this.superPower = new SuperPower();
  }
}

class Fox extends Animal {
  constructor(numOfLeg, is_warm_blooded) {
    super(numOfLeg, is_warm_blooded);
    this.superPower = new SuperPower();
  }
}

class Chicken extends Animal {
  constructor(numOfLeg, is_warm_blooded) {
    super(numOfLeg, is_warm_blooded);
    this.superPower = new SuperPower();
  }
}

class Frog extends Animal {
  constructor(numOfLeg, is_warm_blooded) {
    super(numOfLeg, is_warm_blooded);
    this.superPower = new SuperPower();
  }
}

let hewan = new Animal();
console.log(hewan.numOfLeg); // 2
console.log("\n");

let ayamJago = new Chicken();
console.log(ayamJago.numOfLeg); // 2
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

