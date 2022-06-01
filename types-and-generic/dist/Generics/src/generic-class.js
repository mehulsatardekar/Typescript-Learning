"use strict";
class userStore {
    constructor() {
        this.userStoreData = [];
    }
    addItem(item) {
        this.userStoreData.push(item);
    }
    removeItem(item) {
        this.userStoreData.splice(this.userStoreData.indexOf(item), 1);
    }
    getAllItems() {
        return [...this.userStoreData];
    }
}
const us1 = new userStore();
us1.addItem('mehul');
us1.addItem('mehul1');
us1.addItem('mehul2');
us1.addItem('mehul3');
console.log(us1.getAllItems());
us1.removeItem('mehul1');
console.log(us1.getAllItems());
