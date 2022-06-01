"use strict";
let Mehul;
Mehul = {
    name: "Max",
    age: 12,
    getInfo(name) {
        console.log(name, this.name);
    }
};
Mehul.getInfo('heyyy');
let lion;
lion = {
    anmialName: "Lion",
    sound(soundType) {
        console.log(soundType);
    },
    type(animaltype) {
        console.log(animaltype);
    }
};
lion.sound('roar');
lion.type('cat');
class AnimalsT {
    constructor() {
        this.anmialName = 'Lion';
        this.name = "Max";
        this.age = 12;
    }
    sound(soundType) {
        console.log(this.anmialName = 'Lion');
        console.log(soundType);
    }
    type(animaltype) {
        console.log(animaltype);
    }
    getInfo(name) {
        console.log(name, this.name);
    }
}
