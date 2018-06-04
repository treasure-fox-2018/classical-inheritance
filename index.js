"use strict"
class Superpower{

    poison(){
        console.log("psssst")
    }

    bite(){
        console.log("raaaawwwwr")
    }

    punch(){
        console.log("waaaaataaaw")
    }
}


class Animal{
    constructor(leg,blood){
        this.leg = leg
        this.blood = blood
        this.superpower = new Superpower
    }
}

class Monkey extends Animal{
    constructor(leg,blood){
        super(2,"warm blood")
    

    }
}

class Lion extends Animal{
    constructor(leg, blood){
        super(2,"warm blood")
    }
}

class Snake extends Animal{
    constructor(leg, blood){
        super(0, "cold blood")

    }
}

let snake = new Snake()
let lion = new Lion()
let monkey = new Monkey()

snake.superpower.bite()
console.log(snake)




