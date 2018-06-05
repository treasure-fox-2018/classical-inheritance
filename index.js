"use strict"
class SuperPower {
  constructor() {
  }
  fart () {
    console.log ('super stink fart')
  }
  fur () {
    console.log ('fur that get me killed')
  }
  hand () {
    console.log ('can not even scratch my back ')
  }
}

class Animal {
  constructor(fang, wing, breath) {
    this.fang = fang,
    this.wing = wing,
    this.breath = 'fire',
    this.superPower = new SuperPower()
  }
}

class Tiger extends Animal {
  constructor(t_fang, t_wing, t_breath, t_super) {
    super(t_fang, t_wing, t_breath, t_super)
  }
}

class Bear extends Animal {
  constructor(fang, wing) {
    super(fang, wing)
  }
}

class Dragon extends Animal {
  constructor(fang, wing, scale) {
    super(fang, wing)
    this.scale = scale
  }
}


//driver code

let whiteTiger = new Tiger ('yes', 'yes', 'test 1')
let brownBear = new Bear ('yes', 'yes')
let blackDragon = new Dragon ('yes', 'yes', 'yes')
console.log(whiteTiger)
whiteTiger.superPower.fart()
console.log(brownBear)
brownBear.superPower.fur()
console.log(blackDragon)
blackDragon.superPower.hand()