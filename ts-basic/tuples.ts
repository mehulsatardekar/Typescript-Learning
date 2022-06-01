// tuples 

// tuples are the dattype which can be hold hetrogenous data type.
const roles : Array<number|object>= [1,{name:'alex'}]

roles.push (1);
roles.push('str') //  will trhow an error because of we are trying to add string in tuples.


// we can restrict the number of argument we want in tupels also

const userRole :[string,number]= ['Admin',1];

userRole[1] = 'alex'