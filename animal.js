"use strict"

class Animal {
    constructor(legs, warm_blooded) {
        this.legs = legs
        this.warm_blooded = warm_blooded
        this.superPower = new SuperPower
    }
}

class Frog extends Animal {
    constructor(legs,warm_blooded,mata) { // di isi parameternya karena jumlah parameter di luar ada 4
        super(legs, warm_blooded) // amabil construct parent
        this.legs = legs
        this.warm_blooded = warm_blooded
        this.mata = mata
    }
}

class Fox extends Animal {
    constructor() { 
        super(4, true) // atau isi di super nya kalo mau assigned dari dalam
    }
}

class Chicken extends Animal {
    constructor() {
        super(2, true)
    }
}

class SuperPower {
    constructor() {}

    use_laser_vision() {
        console.log('leer attack! ====>>>> ====>>>>')
    }  

    be_invisible() {
        console.log('*****clinkz!')
    }
}

// driver code
var frog = new Frog(2,false,2) // kalo assigned sendirii dari luar
var fox = new Fox()
var chicken = new Chicken()

console.log(fox.legs) // liat jumlah kaki ==> 4
console.log(chicken.legs) // 2

console.log(frog) // obj ==> legs: 4, blood: true
console.log(fox)
console.log(chicken)

fox.superPower.use_laser_vision()
frog.superPower.be_invisible()
