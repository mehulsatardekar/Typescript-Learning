/* never in typescript is a neache data type which is never going to return anything its just more specific that we are say Ts compiler 

Note: There's a difference between never and void

*/


const errorProducer =  ()=>{
    throw Error('encountered with error');
}

// now if you see the they skeletion of function on hovering you will see it returns never as type

// difference

let voidType:void =null;

let errorProducerType :never = null  // never type cant be a null