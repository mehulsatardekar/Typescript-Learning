"use strict";
class Persons {
    constructor(id, name) {
        this.userInfo = [];
        this.userId = id;
        this.userName = name;
    }
    setUserInfo() {
        this.userInfo.push({ username: this.userName, userId: this.userId });
    }
    getUserInfo() {
        console.log(this.userInfo);
    }
}
// by default everything is public 
// to make it private add private prefix 
// generally we make variable privates and make it available public by using function basically we add abstraction on it
const pt1 = new Persons(12, 'alex');
pt1.setUserInfo();
pt1.getUserInfo();
// to make it even more shortable in initialize variable we can initialize and declare variable in constructor
class Persons1 {
    constructor(userid, userName) {
        this.userid = userid;
        this.userName = userName;
        this.userInfo = [];
    }
    setUserInfo() {
        // this.userid=12 will throw an error
        this.userInfo.push({ username: this.userName, userId: this.userid });
    }
    getUserInfo() {
        console.log(this.userInfo);
    }
}
const pst1 = new Persons1(1, 'mehul');
const pst2 = new Persons1(3, 'mehuls');
pst1.setUserInfo();
pst2.setUserInfo();
pst1.getUserInfo();
pst2.getUserInfo();
// let suppose you dont some properties to change you can make it as readonly
