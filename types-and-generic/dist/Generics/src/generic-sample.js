"use strict";
// a generic is a more gives flexible to work with more data type by providing Generic Type
// you will have to pass rs interface otherwise you wont be able to access the properties inside it
const userNames = [];
const dataAdder = (ageData, propData) => {
    const r = {
        age: ageData,
        prop: [{
                name: propData
            }]
    };
    userNames.push(r);
};
dataAdder(12, 'alex');
dataAdder(1332, 'mehul');
// no need to do that
// if('age' in userNames[0]){
//     console.log(userNames[0].age);
// }
console.log(userNames[0].age);
