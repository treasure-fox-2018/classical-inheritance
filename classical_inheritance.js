'use strict'

class Animal {
    constructor(name, legs, warmBlooded) {
        this._name = name;
        this._num_legs = legs;
        this._is_warm_blooded = warmBlooded;
        this.superpower = new SuperPower();
    }
}

class Frog extends Animal {
    constructor(name, legs, warmBlooded, swim) {
        super(name, legs, warmBlooded);
        this._speed = swim + ' km/hours';
    }
}

class Bat extends Animal {
    constructor(name, legs, warmBlooded, food) {
        super(name, legs, warmBlooded);
        this._eat = food;
    }
}

class Chimpanzee extends Animal{
    constructor(name, legs, warmBlooded, sound) {
        super(name, legs, warmBlooded);
        this._sound = sound
    }
}

class Fox extends Animal {
    constructor(name, legs, warmBlooded, speed) {
        super(name, legs, warmBlooded);
        this._speed = speed + ' km/hours';
    }
}

class Chicken extends Animal {
    constructor(name, legs, warmBlooded, egg) {
        super(name, legs, warmBlooded);
        this._makeEggs = egg + ' eggs per day';
    }
}

class SuperPower {
    constructor() {
        this.superpower = 'false';
    }

    flying() {
        this.superpower = ' can fly very fast';
    }

    camouflage() {
        this.superpower = ' can be disappear at night';
    }

    protectOther() {
        this.superpower = ' can protect other';
    }

    becomeDelicious() {
        this.superpower = ' become delicious food';
    }
}

var bat1 = new Bat('Bat', 2, true, 'blood');
var fox1 = new Fox('Fox', 4, true, 80);
var frog1 = new Frog('Frog', 2, false, 40);
var chimp1 = new Chimpanzee('Chimpz', 2, true, 'ROAAAAAAAR');
var chick1 = new Chicken('Chicken', 2, true, 7);

bat1.superpower.flying();
fox1.superpower.camouflage();
frog1.superpower.camouflage();
chimp1.superpower.protectOther();
chick1.superpower.becomeDelicious();

console.log(bat1);
console.log(fox1);
console.log(frog1);
console.log(chimp1);
console.log(chick1);