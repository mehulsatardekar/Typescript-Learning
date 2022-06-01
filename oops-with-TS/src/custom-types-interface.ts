
// we can add anonymous function in types and interface also

type  sumofNum = (a:number, b:number)=> void;

let add : sumofNum;

add = (a,b)=>{
  console.log(a+b);
}



add(5,2)


interface sumofNum2{
    (a:number, b:number):void;
}

let add2 : sumofNum2;

add2 = (a,b)=>{
    console.log(a+b);
    
}

add2(3,5);


// note : look very closely at how we have declare the body of function in TS