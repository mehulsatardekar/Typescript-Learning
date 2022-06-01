var arr = ['mehul', 'alex', 'rohit'];
var arr2 = ['sneha'];
arr.push.apply(arr, arr2); // this is combining arrays into one  rest operator
console.log(arr);
// we can have number with string array also
var arrayWithNumberAndString = function (nums) {
    console.log(nums);
};
arrayWithNumberAndString([1, 2, 3, 4, 5, "alex"]);
// this is spreading of numbers combining and resulting sum
var sumOfNum = function () {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    return num.reduce(function (acc, currVal) {
        return acc + currVal;
    });
};
console.log(sumOfNum(1, 2, 3, 4, 5, 6));
// object destructuring 
// its doesnt change/mutate the original array 
var name1 = arr[0], name2 = arr[1], names = arr.slice(2);
console.log(name1, name2, names);
var nameObj = {
    ram: 1
};
// const {ram} = nameObj; // object destructuring pulling out values 
// console.log(ram);
// suppose you want to override the ram with something else you can do this by 
var username = nameObj.ram;
console.log(username);
