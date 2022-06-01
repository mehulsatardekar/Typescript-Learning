// optional chaining can be usefull where you have nested properties in object and you not sure it will be there or not or what type would be there
const Persons ={
    name:'emma watson',
    work:{
        company:'microsoft'
    }
}


console.log(Persons?.work?.company); 
//this can be written as well  Persons.work && Persons.work.company
