"use strict"


class Animal {
    constructor() {
        this._kingdom = 'animalia'
    }

    get kingdom() {
        return this._kingdom;
    }
}

class Vertebrata extends Animal {
    constructor() {
        super();
        this._class = 'vertebrata';
        this._legs = 4;
    }

    get class() {
        return this._class;
    }

    get legs() {
        return this._legs;
    }
}

class Reptiles extends Vertebrata {
    constructor(species) {
        super();
    }

    get species() {
        return this._species;
    }

    get legs() {
        return this._legs;
    }
}

class Mamals extends Vertebrata {
    constructor() {
        super();
        this._subClass = 'Mamals';
        this._legs = 4;
    }

    get subClass() {
        return this._subClass;
    }

    get legs() {
        return this._legs;
    }
}

class Monkey extends Mamals {
    constructor() {
        super();
        this._legs = 2;
    }

    get legs() {
        return this._legs;
    }

    sound() {
        console.log('eak .. eaak .. eeaaak ..');
        return this;
    }

}

class Snake extends Reptiles {
    constructor(species) {
        super();
        this._legs = 0;
        this._species = species;
    }

    get legs() {
        return this._legs;
    }

    get species() {
        return this._species;
    }

    sound() {
        console.log('sssttt .. sssttt .. sssttt.. ');
        return this;
    }

}

class Tiger extends Mamals {
    constructor(species) {
        super();
        this._legs = 2;
        this._species = species;
    }

    get legs() {
        return this._legs;
    }

    get species() {
        return this._species;
    }

    sound() {
        console.log('Auuuummmm');
        return this;
    }

}


var monyet = new Monkey('Pongo Pygmaeus');

var ular = new Snake('Cobra');

console.log(ular);
ular.sound();
console.log(`jumlah kaki : ${ular.legs}`);

console.log();

console.log(monyet);
monyet.sound();
console.log(`jumlah kaki : ${monyet.legs}`);


// RELEASE 1

class SuperPower {
    constructor() {

    }

    use_laser_vision() {
        console.log(`Laser vision on duty`);
        return this;
    }

    be_invisible() {
        console.log(`I'm not visible`);
        return this;
    }
}
