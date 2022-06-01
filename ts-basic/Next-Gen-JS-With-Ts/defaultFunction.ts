// in default function the the sequence matters most in Ts 

const userNames = (name1:string='alex', name2)=>{
    console.log(name1)
    console.log(name2);
    
}

// if you see here is gives an error cause its still expecting a 2nd parameter even though  we have specified default parameter
// In TS sequence matters most 

 // userNames('rohit')

// To avoid this just shift the default parameter to last 

const userNames2 = ( name2, name1:string='alex')=>{
    console.log(name1)
    console.log(name2);
    
}


userNames2('alex') // it wont give an error