const person : object = {
    name:'alex',
    age:12,
    cities:['mumbai','bangalore','goa']
}

console.log(person);

// now lets try to access property which is not available

console.log(person.wife); 

//  will give and static type check error / if you try to compile and try to access property which is not available will throw an error

