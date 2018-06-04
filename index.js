"use strict"

class Animals{
    constructor(name, color, num_legs=2){ // klu num_legs nggak diisi otomatis keisi 2
        this.name = name
        this.color = color
        this.num_legs = num_legs
    }
}

class Dog extends Animals{
    constructor(name, color, num_legs, is_warm_blood){
        super(name, color, num_legs)
        this.is_warm_blood = is_warm_blood
    }

    sound(){
        console.log("Gukguk")
    }
}

class Chimpanzee extends Animals{
    constructor(name, color, num_legs, is_warm_blood){
        super(name, color, num_legs)
        this.is_warm_blood = is_warm_blood
        this.superpower = new SuperPower()
    }

    jump(){
        console.log('Jump to another tree')
    }
}

class Chicken extends Animals{
    constructor(name, color, num_legs, is_warm_blood){
        super(name, color, num_legs)
        this.is_warm_blood = is_warm_blood
        this.superpower = new SuperPower()
    }

    sound(){
        console.log("kokokokokok")
    }
}

class SuperPower{
    use_leser_vision(){
        console.log("haaiiiiaaaaaa")
    }

    be_invisible(){
        console.log("clllliiinngggg")
    }
}
const dog = new Dog("Cihuaha", "Cokelat", 4, "No")
console.log(dog)
dog.sound()

const monkey = new Chimpanzee("Gani", "Black", 2, "No")
console.log(monkey)
monkey.superpower.use_leser_vision()
monkey.jump()

const chicken = new Chicken("Jago", "Black", 2, "Yes")
console.log(chicken)
chicken.sound()
chicken.superpower.be_invisible()
