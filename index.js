"use strict"

class Animal {
  constructor() {
    this._alive = true;
    this._creationOfGod = true;
    this.SuperPower = new SuperPower;
  }

  roar() {
    return "AAAAAAA";
  }

}

class Herbivorae extends Animal {
  constructor(numberOfLegs) {
    super(numberOfLegs);
    this._order = "Herbivorae"
    this.legs = numberOfLegs;
  }
}

class Carnivorae extends Animal {
  constructor(numberOfLegs) {
    super(numberOfLegs);
    this._order = "Carnivorae"
    this.legs = numberOfLegs;
  }
}

class Panthera extends Carnivorae {
  constructor(numberOfLegs) {
    super(numberOfLegs);
    this.legs = 4;
  }

  roar () {
    return "GROARRRR";
  }

}

class SuperPower {
  constructor() {
    this._defaultPower = "ORDINARY ANIMAL"
    return;
  }

  get laser() {
    this._laserVision = "CUINGGGGGGGG";
    return this._laserVision;
  }

  get meepo() {
    this._meepo = "DIVIDED WE STAND";
    return this._meepo;
  }

  get silencer() {
    this._silenced = "SILENCE";
    return this._silenced;
  }
}

var zebra = new Herbivorae();

console.log(zebra.roar());

var lion = new Panthera();

var power = new SuperPower();

console.log(lion.SuperPower);

// console.log(lion.roar());
