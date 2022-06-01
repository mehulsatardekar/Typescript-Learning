class Person{
    username:string;
 
    constructor(n:string){
        this.username = n;
    }
    
     userDetail(this:Person){
        console.log(this.username);
    }
 }
 
 
 const p1 = new Person('mehul');
 
 p1.userDetail()


// here what we are doing is we copied the p1 instance and created object with property called getNames and its holding the whole function
// but if we try to call the function it will show undefined because of this

/* why so? 
 let's understand , the this is refering to the class Person 
 the main rule of this it is responsible for calling method is the object that is refers to

 here getname:p1.userDetail the p2 instance is responsible to call this method beacuse we are calling p2.getNames()
 therefore p2 is responsible to calling getNames() method here  

 to workaround this problem we can explicity tell to this to refer the specific object by adding name property to refer this 



*/

 const p2 = { username:'alex',  userDetail: p1.userDetail};

 p2.userDetail()

 //note that when creating propert of object the property of name should match with function name otherwise you may encounter with error

// // person2 object


// class Person2{
//     username:string
 
//     constructor(username:string){
//         this.username = username;
//     }
    
//      userDetail(this: Person2){
//         console.log(this.username);
//     }
//  }
 
 
//  const ps1 = new Person2('mehul');
 
//  ps1.userDetail()

//  const ps2 = {username:'alex', s: ps1.userDetail};

//  ps2.s()



