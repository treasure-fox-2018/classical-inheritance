"use strict"

class Animal {
  constructor (classAnimal, eye, legs, family) {
    this._classAnimal = classAnimal;
    this._eye = eye;
    this._num_legs = legs;
    this._family = family;
    this.superPower = new SuperPower();
  }

  get classAnimal () {
    return this._classAnimal;
  }

  get eyeAnimal () {
    return this._eye;
  }

  get num_legs () {
    return this._num_legs;
  }
  
  set family (family) {
    this._family = family;
  }
}

class Cow extends Animal {
  constructor (classAnimal, eye, legs, family) {
    super(classAnimal, eye, legs, family);
    this._commonColorinIndonesia = 'white';
  }

  get color () {
    return this._commonColorinIndonesia;
  }
}

class Lion extends Animal {
  constructor (classAnimal, eye, legs, family) {
    super(classAnimal, eye, legs, family);
    this._location = 'forest';
  }

  get location () {
    return this._location;
  }
}

class Cheetah extends Animal {
  constructor (classAnimal, eye, legs, family) {
    super(classAnimal, eye, legs, family);
    this._speed = 'fastest';
  }

  get speed () {
    return this._speed;
  }
}

class SuperPower {
  constructor () {
    this.super_power = 'Roaaaar';
  }

  superCow () {
    this.super_power = 'Mooouw';
  }

  superLion () {
    this.super_power = 'Rrrrrooaaww';
  }

  superCheetah() {
    this.super_power = 'Whuuusssh'
  }
}

var animal = new Animal ('Mammalia', 2, 4,'Carnivora')
var lion = new Lion ('Mammalia', 2, 4,'Carnivora');
var cheetah = new Cheetah ('Mammalia', 2, 4,'Carnivora');
var cow = new Cow ('Mammalia', 2, 4, 'Carnivora');

cow.family = 'Herbivora';

console.log(cow);
console.log(cheetah);

lion.superPower.superLion()
console.log(lion);

