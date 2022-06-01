interface Users{
    name:string;
    age:number;

    getInfo(name:string):void

}


let Mehul: Users;

Mehul = {
    name:"Max",
    age:12,

    getInfo(name){
      console.log(name , this.name);
    }
}


Mehul.getInfo('heyyy')


interface Animals{

  anmialName:string;
  sound(soundType:string):void;
  type(animaltype:string):void;

}


let lion : Animals;

lion={

  anmialName:"Lion",

  sound(soundType:string){
      console.log(soundType);
  },
  
  type(animaltype:string){
    console.log(animaltype);
    
  }

}

lion.sound('roar')
lion.type('cat')


class AnimalsT implements Animals, Users {
    
  anmialName='Lion';

  sound(soundType:string){
    console.log(this.anmialName='Lion');
    
    console.log(soundType);
}

type(animaltype:string){
  console.log(animaltype);
  
}


name="Max";
age=12;

getInfo(name:string){
  console.log(name , this.name);
}
    
}


// optional parameter 

interface Optional{
  name?:string // it says that it will have the name property or not its optional 
  age?:number
}