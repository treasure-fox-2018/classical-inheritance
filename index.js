"use strict"

class Animal {
  constructor(num_legs, is_warm_blooded) {
    this.num_legs = num_legs
    this.blood_type = is_warm_blooded
    this.superpower = new SuperPower();
  }
}

class Frog extends Animal {
  constructor(num_legs, is_warm_blooded) {
    super(num_legs, is_warm_blooded)
  }
}

class Fox extends Animal {
  constructor(num_legs, is_warm_blooded) {
    super(num_legs, is_warm_blooded)
  }
}
class Bat extends Animal {
  constructor(num_legs, is_warm_blooded) {
    super(num_legs, is_warm_blooded)
  }
}
class Chimpanzee extends Animal {
  constructor(num_legs, is_warm_blooded) {
    super(num_legs, is_warm_blooded)
  }
}
class Chicken extends Animal {
  constructor(num_legs, is_warm_blooded) {
    super(num_legs, is_warm_blooded)
  }
}

class SuperPower {
  constructor() {

  }
  use_laser_vision() {
    this.superpower = 'Kamekameha !'
    return this.superpower
  }
  be_invisible() {
    this.superpower = 'Abrakabra, menghilang !'
    return this.superpower
  }
  flying() {
    this.superpower = 'Awan kinton, wuushhh !'
    return this.superpower
  }
}

let binatang = new Animal (2, 'cold')

let rubah = new Fox (4, 'hot')
let kelalawar = new Bat (2, 'hot')
let monyet = new Chimpanzee (2, 'hot')
let ayam = new Chicken (2, 'hot')

console.log(rubah)
console.log(kelalawar)
console.log(monyet)
console.log(ayam)

console.log(rubah.superpower.be_invisible())
console.log(kelalawar.superpower.flying())
console.log(monyet.superpower.use_laser_vision())
console.log(ayam.superpower.be_invisible())
