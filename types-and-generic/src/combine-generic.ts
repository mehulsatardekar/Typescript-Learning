// generic with multiple datatype

// well you cant directly perform arithmetic operation on Generic
// const args= <T extends number ,U extends number>(a:T, b:U)=>{      
//         return a+b;
// } 

const args= <T,U>(a:T, b:U)=>{      
    if(typeof a === 'string' && typeof b==='string'){
         return a+b 
    }
    else if((typeof a === 'number' && typeof b==='number')){
        return a+b
    }

    
} 

console.log(args<number,number>(5,5));

 console.log(args<string, string>('Ten', 'Five'));


// combine objects 

// here we are telling by extending it has to be a object only the generic Type

const objCombiner  = <T extends object,U extends object>(obj1:T, obj2:U) =>{
    return Object.assign(obj1,obj2);
}

console.log({name:'alex', hobbies:['cricket','Tennis']}, {name2:'ram'});
