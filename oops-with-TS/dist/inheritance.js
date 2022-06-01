"use strict";
class Parent {
    constructor(name) {
        this.property = [];
        this.name = name;
    }
    setInfo() {
        this.property.push({ name: this.name, property: 'house' });
    }
    getInfo() {
        console.log(this.property);
    }
}
class Child extends Parent {
    constructor(childname) {
        super('Dads');
        this.childname = childname;
    }
    setInfo() {
        this.property.push({ name: this.childname, property: 'house', cars: ['rolls-royce'] });
    }
    getInfo() {
        console.log(this.property);
    }
}
const c1 = new Child('mehul');
c1.setInfo();
c1.getInfo();
