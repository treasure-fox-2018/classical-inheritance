"use strict"

class Animal {
  constructor(leg, lifeType){
    this.leg = leg
    this.lifeType = lifeType
    this.superPower = new superPower()
  }
}

class Dolpin extends Animal {
  constructor(leg,lifeType){
    super(leg,lifeType)
  }
}

class Bat extends Animal {
  constructor(leg,lifeType){
    super(leg,lifeType)
  }
}

class Fox extends Animal {
  constructor(leg,lifeType){
    super(leg,lifeType)
  }
}

class Chimpanze extends Animal {
    constructor(leg,lifeType) {
        super(leg,lifeType)

    }
}

class Chicken extends Animal {
    constructor(leg,lifeType) {
      super(leg,lifeType)

    }
}

class superPower {
    constructor() {
        this.superPower = 'this animal is doesnt have any superpower'
    }
    sonar() {
        this.superPower = 'have ultra sonar';
    }
    fastRunning() {
        this.superPower = 'have fast running'
    }
    seeInTheDark() {
        this.superPower = 'see in the dark';
    }
}

let dolpin = new Dolpin(2, 'water')
let bat = new Bat(2, 'cave')
let fox = new Fox(4, 'land')
let chimpanze = new Chimpanze(4, 'land')
let chicken = new Chicken(2,'land')

dolpin.superPower.sonar()
chimpanze.superPower.fastRunning()
bat.superPower.seeInTheDark()
fox.superPower.seeInTheDark()

console.log(dolpin)
console.log(bat)
console.log(fox)
console.log(chimpanze)
console.log(chicken)
