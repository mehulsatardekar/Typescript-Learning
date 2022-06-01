"use strict";
// make function that prints the length
// instead of passing lengthProp as type you can extend string also and this will work too
const printLength = (value) => {
    if (value.length > 0) {
        console.log(value.length);
    }
    else {
        console.log('no value is provided');
    }
};
printLength('mehuls');
printLength('');
