"use strict"
class Animal {
  constructor(fang, wing, breath) {
    this.fang = fang,
    this.wing = wing,
    this.breath = 'fire',
    this.SuperPower = new SuperPower()
  }
}

class Tiger extends Animal {
  constructor(fang, wing) {
    super(fang, wing)
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

class SuperPower extends Animal {
  constructor() {
    this.SuperPower = 'breathing just fine'
  }
  thunderbolt() {
    this.SuperPower = 'just like pikachu'
  }
  fart() {
    this.SuperPower = 'super stink'
  }
}


let whiteFang = new Tiger ('yes', 'yes')
let brownFur = new Bear ('yes', 'yes')
let blackWing = new Dragon ('yes', 'yes', 'yes')

brownFur.SuperPower.thunderbolt()
blackWing.SuperPower.fart()

console.log(whiteFang)
console.log(brownFur)
console.log(blackWing)