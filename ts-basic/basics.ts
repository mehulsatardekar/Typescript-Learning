const sumOfNumbers =  (num1:number, num2:number, name:string, isAvailable:boolean)=>{
    
    if(isAvailable){
        console.log('hey this is ', name, 'sum is =', num1+num2);   
    }else{
        console.log('oops ')
    }


}

console.log(sumOfNumbers(1,12,'alex', true)); // here it will concat the result so it will cause unexpected result and some silly bugs in an app.


