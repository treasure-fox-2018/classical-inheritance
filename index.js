"use strict"
class Animal {
  constructor(legs, name) {
    this.legs = legs
    this.name = name
    this.superpower = new SuperPower()
  }
}

class Ayam extends Animal {
  constructor(legs, name) {
    super(legs, name)
  }
}

class Frog extends Animal {
  constructor(legs, name) {
    super(legs, name)
  }
}

class Batman extends Animal {
  constructor(legs, name) {
    super(legs, name)
  }
}

class SuperPower {
  use_laser_vision() {
    return ' Using laser vison! '

  }

  be_invisible() {
    return 'become Invisible ! '
  }

}



// let animalku = new Animal(5, 'coba')
// console.log(animalku)
let ayaman = new Ayam(4, 'susi')
let batm = new Batman(4, 'Kingblack')
console.log(batm)
console.log(ayaman)
console.log(ayaman.name, ayaman.superpower.use_laser_vision())
