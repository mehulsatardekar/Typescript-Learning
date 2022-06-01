
const arr = ['mehul','alex', 'rohit'];


const arr2 =['sneha'];

arr.push(...arr2) // this is combining arrays into one  rest operator

console.log(arr);




// we can have number with string array also
const arrayWithNumberAndString = (nums:Array<number|string>) =>{
    console.log(nums);
    
}

arrayWithNumberAndString([1,2,3,4,5,"alex"])


// this is spreading of numbers combining and resulting sum
const sumOfNum = (...num:number[])=>{
   return num.reduce((acc, currVal)=>{
        return acc + currVal;
    })
}

console.log(sumOfNum(1,2,3,4,5,6));


// object destructuring 
// its doesnt change/mutate the original array 
const [name1, name2, ...names] = arr;
console.log(name1, name2,  names);


const nameObj = {
    ram:1,
}


// const {ram} = nameObj; // object destructuring pulling out values 

// console.log(ram);

// suppose you want to override the ram with something else you can do this by 

const {ram:username} = nameObj;

console.log(username);




