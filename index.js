"use strict"

class Animals {
  constructor(habitat, geographicalName, scientificName, conservationStatus, numLegs) {
    this._habitat = habitat
    this._geographicalName = geographicalName
    this._scientificName = scientificName
    this._conservationStatus = conservationStatus
    this._numLegs = numLegs
    this.superPower = new SuperPower();
  }

  get habitat() {
    return this._habitat
  }

  get numLegs() {
    return this._numLegs
  }

  set numLegs(legs) {
    this._numLegs = legs
  }
}

class Tiger extends Animals {
  constructor(habitat, geographicalName, scientificName, conservationStatus, numLegs) {
    super(habitat, geographicalName, scientificName, conservationStatus, numLegs);
    this._color = 'white'
  }

  get color() {
    return this._color
  }

}

class Zebra extends Animals {
  constructor(habitat, geographicalName, scientificName, conservationStatus,numLegs) {
    super(habitat, geographicalName, scientificName, conservationStatus, numLegs)
    this._eat = 'Vegetarian';
  }

  get eat() {
    return this._eat
  }

}

class Chicken extends Animals {
  constructor(habitat, geographicalName, scientificName, conservationStatus,numLegs) {
    super(habitat, geographicalName, scientificName, conservationStatus, numLegs)
    this._wing = true
    this._egg = true
  }

  get wing() {
    return this._wing
  }

  get egg() {
    return this._egg
  }
}

class SuperPower {
  constructor() {
    this.super_power = 'Whoaaa'
  }

  superTigers() {
    this.super_power = 'The tiger’s super power lies in his whiskers'
  }

  superZebra() {
    this.super_power = 'whooammmm'
  }

  superChicken() {
    this.super_power = 'kongkorongookk'
  }

}

const animal = new Animals('Forests', 'Eastern Russia', 'Panthera tigris altaica', 'Endangered', 2)

var tiger = new Tiger('Forests', 'Eastern Russia', 'Panthera tigris altaica', 'Endangered')

const zebra = new Zebra('Semi-arid scrubland and grassland', 'Northern Kenya', 'Equus grevyi', 'Endangered', 4)

const chicken = new Chicken('Forests', 'Indonesia', 'Gallus gallus domesticus', 'Threatened', 2)


tiger.numLegs = '4'
console.log(zebra.eat)
console.log(chicken.wing)
chicken.superPower.superChicken()
console.log(chicken)

