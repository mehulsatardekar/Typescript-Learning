// we have promise in generic too
// here we are saying return it as string 

const promise1: Promise<string> = new Promise((resolve,reject)=>{
    resolve('promise resolved')
    console.log('hey');
    
})



promise1.then(e=> console.log(e))

console.log('ro');
