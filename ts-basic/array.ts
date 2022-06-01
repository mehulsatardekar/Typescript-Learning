// Arrays in Ts

// Arrays in Ts we can store homogenous data type in array means you cant have different different data type at same time to store data
// Eg.


let userNames: string[] = ['mehul'];

// we cant even perform push if you have assign it as a string array
 // userNames.push(1)


 const Person ={
     name: 'alex',
     age : 12,
     users : ['rohit','simran', 'sneha']
 }

 // console.log(Person.users.push({name:'1'})) 
 //  it should have only string values cause we have defined as string array so even if you try to add other dataype will give an error.


//Person.location = "ms" // cause TS is good enough to find out it has no property available in Person Object


for( const user of  Person.users){
    console.log(user.toLowerCase());
   
   // user.map() //  Ts is smart enough to understand that map is only available on array not on string so it gives an static type check error
  
}




// Array with generic types

const names : Array <string > = ['alex']

/* Two Types in Arrays
1] one dimension 
2] Two dimension

*/

// Two dimension


//const userlist : number[][] = [[12,3], [1,33]] // number type

// generic type array declaration
const userlist : Array<string[]> = [['alex','mehuls'], ['ram']]


console.log(userlist[0]);



// well we can extend this suppose we want an array with numbers and string values can be done this via also.
const listArr: Array<string|number> = [12,'number'];



   // it is very usefull when it come to large codebases so devs can easily understands what methods are available and not