// typeguards are just a way to check type
// basically its used for before accesing a property is it available or not

type tname = {
    name:string;
}

type tage = {
    age:number;
    agearr:string[];
}



type combinable = string | number;

const getInfos =(a:combinable , b:combinable)=>{
     //return a+b; // this wont works cause combinable has string and number so it may lead bugs cause concating number with string lead output string

   if(typeof a === 'string' || typeof b === 'string'){
       return a.toString()+b.toString();
   }

    return a+b;

}

console.log(getInfos(1,'1'))

type tcombine = tname & tage;


const getInfoFromType= (tcomb: tcombine)=>{
    console.log(tcomb.age);
    console.log(tcomb.agearr);
    
    
}


interface nameInterface{
    name:string
}

interface ageInterface{
    age:number;
    agerarr:string[];
    getInfo():void;
}


type userInterface = nameInterface | ageInterface;

const ts = (t:userInterface)=>{

   // this is a type guard
    if('name' in t){
        console.log(t.name); // if we direct access it will give an error 
    }
}