class users{
    static fiscalYear:number=2021;
    private static arun:string;
    private static rollno:string;
    constructor(arun:string, rollno:string){
        users.arun = arun;
        users.rollno = rollno;
    }
    
    static getInfo(){
        console.log(users.arun)
        console.log(users.rollno);
        
    }
}

// static method can have only static variable
const us = new users('ar', '12');
const u1 = users.getInfo()


