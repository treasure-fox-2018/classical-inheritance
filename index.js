
"use strict"
class Animals {
  constructor(subPhylum, canMove) {
    this._subPhylum = subPhylum;
    this._canMove = canMove;
    this._superPower = new SuperPower();
  }
  get subPhylum() {
    return this._subPhylum;
  }
  get canMove(){
    return this._canMove;
  }
  get superPower() {
    return this._superPower;
  }
}

class Lion extends Animals{
  constructor(mane) {
    super('Mammalia', true);
    this._mane = mane;
  }
  get mane() {
    return this._mane;
  }
  prowl() {
    console.log('*silently advances');
  }
}

class Shark extends Animals{
  constructor(fins) {
    super('Piscine', true);
    this._fins = fins;
  }
  get fins() {
    return this._fins;
  }
  hunt() {
    console.log('*cue jaws theme');
  }
}
class Snake extends Animals{
  constructor(fangs) {
    super('Reptilia', true);
    this._fangs = fangs;
  }
  get fangs() {
    return this._fangs;
  }
  slither() {
    console.log('*slithers left and right');
  }
}



class SuperPower {
  superRoar(){
    console.log('*skill activated');
    console.log('AUUUMMM');
    console.log('*earth shakes');
  }
  superSpeed(){
    console.log('*tapped into speedforce');
    console.log('ZOOOOMMMZOOOMMZOOOOOM');
    console.log('*cue slow motion effect');
  }
  superStrength(){
    console.log('*skill activated');
    console.log('Krakom');
    console.log('*earth shatters');
  }
}

let singa = new Lion('Beautiful');
let hiu = new Shark('Scary');
let ular = new Snake('Venomous');

singa.prowl();
singa.superPower.superRoar();
hiu.hunt();
hiu.superPower.superStrength();
ular.slither();
ular.superPower.superSpeed();
