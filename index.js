
"use strict"

class SuperPower{
    user_laser_vision(){
        return 'super laserrrr!!'
    }
    be_invisible(){
        return 'goneee'
    }
}

class Animals {
    constructor(species,habitat,legs,typeBlood){
        this.species = species
        this.habitat = habitat
        this.legs = legs
        this.warmBlood = typeBlood
    }

}

class Frog extends Animals{
    constructor(species,habitat,legs,typeBlood){
        super(species,habitat,legs,typeBlood)
        this.superPower = new SuperPower
       
    }
}

class Bat extends Animals{
    constructor(species,habitat,legs,typeBlood){
        super(species,habitat,legs,typeBlood)
    }
}

class Chicken extends Animals{
    constructor(species,habitat,legs,typeBlood){
        super(species,habitat,legs,typeBlood)
    }
}

class Fox extends Animals{
    constructor(species,habitat,legs,typeBlood){
        super(species,habitat,legs,typeBlood)
    }
}

var frog = new Frog('repltile','amphibi',4,false)
var bat = new Bat('mamals','cave',2,true)
var chicken = new Chicken('bird','farm',2,true)
var fox = new Fox('mamals','land',4,true)
// var laser = new SuperPower(user_laser_vision())

console.log(bat)
console.log(chicken)
console.log(fox)
console.log(frog.superPower.be_invisible())
