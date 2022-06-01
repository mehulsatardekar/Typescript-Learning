"use strict";
let user = 'mehul';
const start = performance.now();
const getName = (users) => {
    console.log('hey ', users);
};
const end = performance.now();
console.log('time taken to execute the function is=', end - start);
getName.call(null, 'alex');
//getName('alex')
let names = [{ name: 'gaurav', age: 12 }, { name: 'gaurav2', age: 1222 }];
console.log(names);
