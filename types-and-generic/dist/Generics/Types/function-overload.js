"use strict";
const getfInfos = (a, b) => {
    //return a+b; // this wont works cause combinable has string and number so it may lead bugs cause concating number with string lead output string
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
};
// here we know that 1 + '1' will give an string result and split works on string but TS will yell at you so therefore we will have to 
// explicitily tell its going to be string type
// it can be done this way too
const res = getInfos(1, '1'); // it can be called type casting also
res.split('');
