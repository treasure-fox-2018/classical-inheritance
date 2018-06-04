"use strict"
class Animal {
    constructor(mata, kaki){
        this.mata = mata
        this.kaki = kaki
        this.superpower = new SuperPower
    }
}

class Frog extends Animal{
    constructor(mata, kaki, amphibi){
        super(mata, kaki)
        this.amphibi = amphibi
    }

    suara(){
        console.log('ngoooook');
    }
}

class Bat extends Animal{
    constructor(mata,kaki,aves){
        super(mata,kaki)
        this.aves = aves
    }

    suara(){
        console.log('ngiiiiiiikkk');
        
    }
}

class Chimpanze extends Animal{
    constructor(mata, kaki,mamalia){
        super(mata, kaki, mamalia)
        this.mamalia = mamalia
    }

    suara(){
        console.log('uuu aaaa uuuu aaaa');
        
    }
}

class Fox extends Animal{
    constructor(mata, kaki, karnivora){
        super(mata, kaki)
        this.karnivora = karnivora
    }

    suara(){
        console.log('auuuuuuuuuuuuuuu');
        
    }
}

class Chicken extends Animal{
    constructor(mata, kaki, insectiphora){
        super(mata, kaki)
        this.insectiphora = insectiphora
    }
    
    suara(){
        console.log('ciak ciak ciak');
        
    }
}

class SuperPower {
    constructor(){
        this.superpower = 'be the hero'
    }

    bite(){
        this.superpower = 'this animal has a serious biting'
    }

    punch(){
        this.superpower = 'this animal has a strong punch'
    }
}


var ayam = new Chicken('ada','ada','iya')
ayam.suara()
console.log(ayam.mata);
var kodok = new Frog('ada','ada','iya')
kodok.suara()
var serigala = new Fox('ada','ada','iya')
serigala.suara()

serigala.superpower.bite()
console.log(serigala);


