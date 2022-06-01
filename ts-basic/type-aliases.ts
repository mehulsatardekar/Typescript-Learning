// type aliases can be used to "create" your own types.

// to create type use type keyword followed by typename and property 

type userDetails = string | number

const user : userDetails = 'alex';

type userDetails2 = {
    name: string,
    age:number
}

const getUsersDetails =(userDetails2)=>{
    console.log(userDetails2.name);    
}

// or  both does the da

const getUsersDetails2 =(users: userDetails2)=>{
    console.log(users.name);    
}


getUsersDetails2({name:'alex', age:12});

getUsersDetails({name:'alex', age:12});






