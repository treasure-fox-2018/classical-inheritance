"use strict"
class Binatang {
  constructor(habitat, num_legs=2) {
    this.habitat = habitat
    this.num_legs = num_legs
    this.superPower = new SuperPowered ()
  }
}

class Frog extends Binatang {
  constructor(habitat, num_legs) {
    super(habitat, num_legs)
  }
} 

class Bat extends Binatang {
  constructor(habitat, num_legs) {
    super(habitat, num_legs)
  }
}

class Chimpanzee extends Binatang {
  constructor(habitat, num_legs) {
    super(habitat, num_legs)
  }
}

class Fox extends Binatang {
  constructor(habitat, num_legs) {
    super(habitat, num_legs)
  }
}

class Chicken extends Binatang {
  constructor(habitat, num_legs) {
    super(habitat, num_legs)
  }
}

class SuperPowered {
  constructor() {
    this.superPower = 'This Animals not Have a special Power'
  }

  runningFlash() {
    this.superPower = 'This Animals have Flash Running Power'
  }

  bodyRock() {
    this.superPower = 'This Animals have Body Rock Power'
  }

  strongHead () {
    this.superPower = 'This Animals have Strong Head Power'
  }
}

var hewan = new Binatang ('laut', 4)
var chicken = new Chicken ('belakang rumah', 2)
var frog = new Frog ('danau')
var chimpanse = new Chimpanzee('hutan', 2)
var fox = new Fox('hutan', 4)
var bat = new Bat('goa')

chicken.superPower.bodyRock()
chimpanse.superPower.runningFlash()
console.log(hewan);
console.log(frog);
console.log(chicken);
console.log(chimpanse);
console.log(fox);
console.log(bat);