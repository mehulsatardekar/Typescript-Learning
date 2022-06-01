"use strict";
// generic with multiple datatype
// well you cant directly perform arithmetic operation on Generic
// const args= <T extends number ,U extends number>(a:T, b:U)=>{      
//         return a+b;
// } 
const args = (a, b) => {
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    else if ((typeof a === 'number' && typeof b === 'number')) {
        return a + b;
    }
};
console.log(args(5, 5));
console.log(args('Ten', 'Five'));
// combine objects 
// here we are telling by extending it has to be a object only the generic Type
const objCombiner = (obj1, obj2) => {
    return Object.assign(obj1, obj2);
};
console.log({ name: 'alex', hobbies: ['cricket', 'Tennis'] }, { name2: 'ram' });
