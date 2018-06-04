"use strict"
class Animals {
    constructor(name){
        this._name = name
        this._food = 'food'
        this._leg = 2
        this._blood ='norm'
        this.superPower = new SuperPower(this._name)
    }

    num_legs(leg){
        this._leg = leg
    }

    is_warm_blooded(){
        this._blood = 'warm';
        
    }

}

class Frog extends Animals {
    constructor(name, food){
        super(name)
        // this._name = name
        this._food = food
    }
}

class Bat extends Animals {
    constructor(name, food){
        super(name)
        //this._name = name
        this._food = food
    }
}

class Chimpanzee extends Animals {
    constructor(name, food){
        super(name)
        //this._name = name
        this._food = food
    }
}

class Fox extends Animals {
    constructor(name, food){
        super(name)
        //this._name = name
        this._food = food
    }
}

class Chiken extends Animals {
    constructor(name, food){
        super(name)
        //this._name = name
        this._food = food
    }
}

class SuperPower{
    constructor(name){
        this._name = name
    }

    use_laser_vision(){
        console.log(`${this._name} : ziiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiinkk`)
    }

    be_invisible(){
        console.log(`${this._name} : pong!!!`)
    }
}


let kodok = new Frog('kodok', 'nyamuk')
kodok.num_legs(4)
kodok.is_warm_blooded()
console.log(kodok)
kodok.superPower.use_laser_vision()
