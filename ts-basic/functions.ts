// functions return types and void

const getuserName = (name: string) =>{
    return  name;
}

// here if you hove on the function so it will show you the return type of it  above we explicitly saying it will be string type 

// you can declare the function as explicity as some specific type 

const getUserID= (id:number):number=>{
 return id
} 
console.log(getUserID(3));



// if the fucntion is not returning make it void or let the typescript infer the type automatically

const me = ()=> console.log('hey i dont return anything');


// Function as Type

const username = (n1:number, n2:number):number => n1+n2;

let compose: Function; // here we are explicity telling it should be function

compose=username;

console.log(compose(2,3));


// Function with callback


const names = (name1:string, name2:string, result: ()=> void)=>{
   result= ()=>{
     console.log( name1 + name2);
     
   };
}


console.log(names('mehul', 'alex',()=>{}))