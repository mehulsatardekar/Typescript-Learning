"use strict";
class users {
    constructor(arun, rollno) {
        users.arun = arun;
        users.rollno = rollno;
    }
    static getInfo() {
        console.log(users.arun);
        console.log(users.rollno);
    }
}
users.fiscalYear = 2021;
// static method can have only static variable
const us = new users('ar', '12');
const u1 = users.getInfo();
