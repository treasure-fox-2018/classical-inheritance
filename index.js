"use strict"
class SuperPower{
    constructor(){
        // this.superPow = ''
    }
    use_laser_vision(){
        // this.superPow = "use laser vision"
        return "use laser vision"
            // return this
    }
    be_invisible(){
        // this.superPow = "be invisible"
        return "be invisible"
            // return this
    }
}

class Animal{
    constructor(status){
        this.num_legs = 2
        this.is_warm_blooded = status
        this.superPower = new SuperPower
    }
}
class Frog extends Animal{
    constructor(){
        super(false);
        this.num_legs = 4
    }
}
class Bat extends Animal{
    constructor(){
        super(true)
    }
}
class Chimpanzee extends Animal{
    constructor(){
        super(true)
    }
}
class Fox extends Animal{
    constructor(){
        super(true)
        this.num_legs = 4
    }
}
class Chicken extends Animal{
    constructor(){
        super(false)
    }
}
class Dog extends Animal{
    constructor(){
        super(true)
        this.num_legs = 4
    }
}
class Duck extends Animal{
    constructor(){
        super(false)
    }
}




// var superPower = new SuperPower
var frog = new Frog
var bat = new Bat
var chimpanzee = new Chimpanzee
var fox = new Fox
var chicken = new Chicken
var dog = new Dog
var duck = new Duck

// superPower.be_invisible()



console.log(frog.superPower.be_invisible());
console.log(bat);
console.log(chimpanzee);
console.log(fox.superPower.use_laser_vision());
console.log(chicken);
console.log(dog);
console.log(duck);




