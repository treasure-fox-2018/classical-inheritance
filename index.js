"use strict"

class Animal {
  constructor (habitat, tipe) {
    // this._classAnimal = classAnimal;
    this._habitat = habitat
    // this._tipe = 'mamalia' // test assign
    this._tipe = tipe
    this._superPower = new SuperPower();
  }

  get habitat(){
    return this._habitat
  }

  get tipe(){
    return this._tipe
  }

  get superPower(){
    return this._superPower
  }
}

class Frog extends Animal{
  constructor(){
    super('darat','amfibi')
    this._isHaveLeg = true
  }

  get isHaveLeg(){
    return this._isHaveLeg
  }

}

class Bat extends Animal{
  constructor(){
    super('goa','mamalia')
    this._isHaveWings = true
  }

  get isHaveWings(){
    return this._isHaveWings
  }
}

class SuperPower {
  constructor () {
    
  }

  powerFrog () {
    console.log('---- ini super Power Frog');
    
  }

  powerBat () {
    console.log('---- ini Super Power Bat');
    
  }
}


var frog = new Frog()
var bat = new Bat()

console.log(frog);
console.log(bat);

frog.superPower.powerFrog()
bat.superPower.powerBat()