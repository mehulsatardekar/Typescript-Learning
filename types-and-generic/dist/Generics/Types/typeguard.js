"use strict";
// typeguards are just a way to check type
// basically its used for before accesing a property is it available or not
const getInfos = (a, b) => {
    //return a+b; // this wont works cause combinable has string and number so it may lead bugs cause concating number with string lead output string
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
};
console.log(getInfos(1, '1'));
const getInfoFromType = (tcomb) => {
    console.log(tcomb.age);
    console.log(tcomb.agearr);
};
const ts = (t) => {
    // this is a type guard
    if ('name' in t) {
        console.log(t.name); // if we direct access it will give an error 
    }
};
