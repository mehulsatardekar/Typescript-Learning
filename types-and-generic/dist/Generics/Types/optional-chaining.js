"use strict";
var _a;
// optional chaining can be usefull where you have nested properties in object and you not sure it will be there or not or what type would be there
const Persons = {
    name: 'emma watson',
    work: {
        company: 'microsoft'
    }
};
console.log((_a = Persons === null || Persons === void 0 ? void 0 : Persons.work) === null || _a === void 0 ? void 0 : _a.company);
//this can be written as well  Persons.work && Persons.work.company
