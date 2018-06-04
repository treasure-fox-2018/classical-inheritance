"use strict"

class Animal {
    constructor (num_legs, is_warm_blooded) {
        this._legs = num_legs;
        this._blood = is_warm_blooded;
        this.Superpower = new Superpower();

    }
}

class Frog extends Animal {
    constructor (num_legs, is_warm_blooded, type) {
        super(num_legs, is_warm_blooded);
        this._type = 'amphibian';
    }

    sound() {
        console.log('ribbit');
    }
}

class Bat extends Animal {
    constructor(num_legs, is_warm_blooded) {
        super(num_legs, is_warm_blooded);
        this._unique = 'sonar';
    }
}

class Lion extends Animal {
    constructor(num_legs, is_warm_blooded) {
        super(num_legs, is_warm_blooded);
        this._legs = 4;
    }
    sound() {
        console.log('ROARRRRR');
    }
}

class Wolf extends Animal {
    constructor(num_legs, is_warm_blooded) {
        super(num_legs, is_warm_blooded);
        this._unique = 'high jump';
    }
}

class Superpower {
    constructor () {
        this.Superpower = 'too weak, low CP';
    }
    laser_vision() {
        this.Superpower = 'ZINGGGG';
    }

    invisibility() {
        this.Superpower = 'SWISHHH';
    }

    teleportation() {
        this.Superpower = 'WOOOSHHH';
    }
    superspeed() {
        this.Superpower = 'ZOOOOMMM';
    }
}

var mammals = new Animal(4, 'yes')
console.log(mammals);

var froggy = new Frog(4, 'no', true);
froggy.sound();
console.log(froggy);

var batman = new Bat(2, 'yes');
batman.Superpower.invisibility();
console.log(batman);

var simba = new Lion(4, 'yes');
simba.sound();
simba.Superpower.teleportation();
console.log(simba);

var werewolf = new Wolf(4, 'yes', 'high jump');
werewolf.Superpower.superspeed();
console.log(werewolf);