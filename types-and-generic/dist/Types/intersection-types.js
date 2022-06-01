"use strict";
// intersection means combining both things
const personDetails = {
    name: 'alex',
    age: 12,
    agearr: ['alex1', 'mehul', 'ramesh']
};
const combines = {
    name: 'alex',
    age: 33,
    agerarr: ['rohit', 'ramesh'],
    combineInterface: true,
    getInfo() {
        console.log(`the name is ${this.name} , and age is ${this.age}, and users are ${this.agerarr} and it all good ${this.combineInterface} `);
    }
};
combines.getInfo();
