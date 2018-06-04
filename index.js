"use strict"


class SuperPower {
  constructor () {}

  super_leap() {
    console.log ('I believe I can fly!')
  }
  cute_eyes() {
    console.log('I love you. *slashes throat*')
  }
  invisibility () {
    console.log('Quas Quas Wex')
  }
  nothing () {
    console.log('You get no superpower HAH!')
  }
}

class Animal {
  constructor (numLegs, bloodType,) {
    this._numLegs = numLegs
    this._bloodType = bloodType
    this._superPower = new SuperPower
  }

  get superpower () {
    return this._superPower
  }
}


class Frog extends Animal {
  constructor () {
    super (4,'Cold Blooded')
  }
}

class Cat extends Animal {
  constructor () {
    super (4, 'Warm Blooded',)
  }
}

class Chimp extends Animal {
  constructor () {
    super (2, 'Warm Blooded',)
  }
}

class Human extends Animal {
  constructor () {
    super (2, 'Warm Blooded',)
  }
}

//Driver Code
let chimp = new Chimp();
let cat = new Cat();
let human = new Human();
let frog = new Frog();

frog.superpower.super_leap();
human.superpower.invisibility();
cat.superpower.cute_eyes();
chimp.superpower.nothing();
