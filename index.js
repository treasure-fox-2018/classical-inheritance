class Animal {
  constructor(legs, foodType) {
    this._legs = legs; // leg count
    this._foodType = foodType; // herbivore, carnivore, omnivore
  }

  get legs() { return this._legs }
  get foodType() { return this._foodType }
}

class Fox extends Animal {
  constructor(legs, foodType) {
    super(legs, foodType);
    this._isWarmBlooded = true;
  }

  sound() {
    console.log("What does the fox say: ")
    console.log("Bingbingbingbingbing");
  }
}

class SuperFox extends Fox {
  constructor(legs, foodType) {
    super(legs, foodType);
    this._superpower = new Superpower();
  }
  get superpower() {
    return this._superpower;
  }
}

class Chicken extends Animal {
  constructor(legs, foodType) {
    super(legs, foodType);
    this._isWarmBlooded = false;
  }
  
  sound() {
    console.log("What does the chicken say: ")
    console.log("Cockoo");
  }
}

class Superpower {
  use_laser_vision() {
    console.log('Unleash laser vision:')
    console.log('ngeeeeng');
  }
  be_invisible() {
    console.log('can you see mee?')
  }

}

//fox.superpower.be_invisible()
let fox = new Fox(4, 'carnivore')
let superFox = new SuperFox(4, 'omnivore');

// console.log(fox)
// console.log(superFox)
superFox.sound()
superFox.superpower.use_laser_vision();