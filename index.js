"use strict"

class Animals {

    constructor (blood, legs) {
        this.blood = blood 
        this.legs = legs || 4
    }

    sound() {
        console.log('fsyuuuuu')
    }
}

class SuperPower {

    constructor () {

    }

    useLaserVision () {
        console.log('fsiu psyu')
    }

    beInvisible () {
        console.log('*leafstepping')
    }
}

class Wolf extends Animals {

    constructor (blood) {
        super (blood)
        this.super = new SuperPower
    }

    sound() {
        super.sound()
        console.log('holwwwww')
    }
}

const wolf = new Wolf ('warm')
console.log(wolf.legs)
console.log(wolf.blood)
wolf.sound()

class Snake extends Animals{

    constructor (blood, legs) {
        super (blood, legs)
        this.poison = true
        this.super = new SuperPower
    }

    sound() {
        console.log('hissss')
    }

    superPower () {
        this.super.beInvisible()
    }

}

const snake = new Snake ('cold', 0)
console.log(snake.blood)
console.log(snake.poison)
snake.sound()
snake.superPower()



