"use strict"
class Animal {
    constructor(name,bloodtype,species){
        this.name = name;
        this.bloodtype = bloodtype;
        this.species = species;
        this.superPower = new SuperPower();
    }
}

class Frog extends Animal {
    constructor (name, bloodtype, species){
        super(name, bloodtype,species);
        this.legs = 4;
    }
}
class Bat extends Animal {
    constructor (name, bloodtype, species){
        super(name, bloodtype,species);
        this.legs = 2;
    }
}
class Chimpanzee extends Animal {
    constructor (name, bloodtype, species){
        super(name, bloodtype,species);
        this.legs = 2;
    }
}
class Fox extends Animal {
    constructor (name, bloodtype, species){
        super(name, bloodtype,species);
        this.legs = 4;
    }
}
class Chicken extends Animal{
    constructor (name, bloodtype, species){
        super(name, bloodtype,species);
        this.legs = 2;
        
    }
}
// class Snake extends Animal{
//     constructor(doge){
//         // super();
//         this.woof = doge;
//     }
// }
class SuperPower{
    constructor(){
        this.superPower = 'this animal has very low mmr, therefore is unable to use any superpower'
    }
    useLazerBeam(){
        this.superPower = 'can shoot lazer beams';
        // console.log(this);
    }
    blinkDagger(){
        this.superPower= 'this animal can blink'
        // console.log(this);
    }
    invincible(){
        this.superPower = 'this animal cannot die';
        // console.log(this);
    }

}

// const snake = new Snake('mcjiberr')
// console.log(snake)

const chiken = new Chicken("chicken","warm blooded","mamal");
const fox = new Fox("fox","warm blooded","mammal");
const chimpanzee = new Chimpanzee("chimpanzee","wam blooded", "mammal");
const bat = new Bat("bat","warm blooded","mammal");
const frog = new Frog("frog", "cold blooded","reptile");
chimpanzee.superPower.useLazerBeam();
frog.superPower.blinkDagger();
console.log(frog);
console.log(chimpanzee);
console.log(fox);




