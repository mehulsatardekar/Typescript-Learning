"use strict";
// we can add anonymous function in types and interface also
let add;
add = (a, b) => {
    console.log(a + b);
};
add(5, 2);
let add2;
add2 = (a, b) => {
    console.log(a + b);
};
add2(3, 5);
// note : look very closely at how we have declare the body of function in TS
