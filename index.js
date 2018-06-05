"use strict"


class Animals {

    constructor (blood, legs) {
        this._blood = blood;
        this._legs = 2;
    }
}

class SuperPower {
    constructor () {

    }

    use_laser_vision() {
        console.log("laser jebreeeeett")
    }

    be_invisible() {
        console.log("i am dissapear")
    }
}

//RELEASE 0 GET PARAMETER VALUE FROM ITS PARRENT 
class Frog extends Animals {

    constructor (blood, legs, eye) {
        super (blood,legs);
        this._eye = eye;
        this.superpower = new SuperPower();
    }

    checkLegs () {
        return "Number Legs "+ this._legs;
    }
    
}

let katak = new Frog (true, 4, "blue")
console.log("katak leg from parent animal :",katak.checkLegs()); //result 2 get legs param value from parent animal
katak.superpower.use_laser_vision() //RELESE 1 ADD SUPER POWER

class Bat extends Animals {

    constructor (blood, legs, eye) {
        super (blood,legs);
        this._eye = eye;
        this.superpower = new SuperPower();
    }

    checkLegs () {
        return "Number Legs "+ this._legs;
    }
    
}
let kelelawar = new Bat (true, 4, "blue")
console.log("kelelawar leg from parent animal :",kelelawar.checkLegs()); //result 2 get legs param value from parent animal
kelelawar.superpower.be_invisible() //RELESE 1 ADD SUPER POWER

class Chimpanzee extends Animals {

    constructor (blood, legs, eye) {
        super (blood,legs);
        this._eye = eye;
        this.superpower = new SuperPower();
    }

    checkLegs () {
        return "Number Legs "+ this._legs;
    }
    
}
let monyet = new Chimpanzee (true, 4, "blue")
console.log("monyet leg from parent animal :",monyet.checkLegs()); //result 2 get legs param value from parent animal
monyet.superpower.use_laser_vision() //RELESE 1 ADD SUPER POWER

class Fox extends Animals {

    constructor (blood, legs, eye) {
        super (blood);
        this._legs = legs;
        this._eye = eye;
        this.superpower = new SuperPower();
    }

    checkLegs () {
        return "Number Legs "+ this._legs;
    }
    
}
let serigala = new Fox (true, 4, "blue")
console.log("serigala leg from own value :",serigala.checkLegs()); //result 2 get legs param value from parent animal
serigala.superpower.be_invisible() //RELESE 1 ADD SUPER POWER

class Chicken extends Animals {

    constructor (blood, legs, eye) {
        super (blood,legs);
        this._eye = eye;
        this.superpower = new SuperPower();
    }

    checkLegs () {
        return "Number Legs "+ this._legs;
    }
    
}

let ayam = new Chicken (true, 2, "black")
console.log("ayam leg from parnet animal value :", ayam.checkLegs()) ////result 2 get legs param value from parent animal
ayam.superpower.use_laser_vision(); // ayam calling super power