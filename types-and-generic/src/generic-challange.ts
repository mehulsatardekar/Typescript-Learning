
// make function that prints the length

// how it is finding length here

/* Here we have make lengthprop type and it has length property 
 
so T is extending lengthProp and it has access to length prop 

as well ass if you see the bracket we have assign T genric Type to value and therefore value can access length props 

 
*/


type lengthProp = {
   length :number
}

// instead of passing lengthProp as type you can extend string also and this will work too
const printLength = <T extends lengthProp>(value:T)=>{
    if(value.length>0){
        console.log(value.length);       
    }else{
        console.log('no value is provided');
    }
 
     
}
printLength('mehuls')

printLength('')