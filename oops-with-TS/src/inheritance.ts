class Parent {
    protected property:Array<Object>=[]
    protected name;
    constructor(name:string){
     this.name = name;
    }
    
    setInfo(){
        this.property.push({name:this.name, property:'house'})
    }

    getInfo(){
        console.log(this.property);
    }
}

class Child extends Parent{
     private childname:string;
    constructor(childname:string){
       super('Dads');
       this.childname= childname;
    }
    
    setInfo() {
        this.property.push({name:this.childname, property:'house', cars:['rolls-royce']})
    }
    getInfo(){
        console.log(this.property);
        
    }
}


const c1 =  new Child('mehul');
c1.setInfo()
c1.getInfo()