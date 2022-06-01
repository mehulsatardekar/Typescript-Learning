// intersection means combining both things

type name = {
    name:string;
}

type age = {
    age:number;
    agearr:string[];
}

type Persons = name & age;  // & operator does the combining of two types job


const personDetails : Persons = {
    name: 'alex',
    age:12,
    agearr:['alex1','mehul', 'ramesh']
}

// note that when you combine the types so after the combined you should have all the property include in it 

// same works for interfaces also 

interface nameInterface{
    name:string
}

interface ageInterface{
    age:number;
    agerarr:string[];
    getInfo():void;
}

interface combineInterface extends nameInterface,ageInterface{
    
    combineInterface:boolean;
}

const combines : combineInterface={
    name:'alex',
    age:33,
    agerarr:['rohit','ramesh'],
    combineInterface:true,

    getInfo(){
        console.log(`the name is ${this.name} , and age is ${this.age}, and users are ${this.agerarr} and it all good ${this.combineInterface} `);
        
    }
}

combines.getInfo()



