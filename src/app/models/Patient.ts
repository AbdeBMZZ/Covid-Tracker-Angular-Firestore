export class Patient{
    public name:string;
    public age:number;
    public address:string;
    public time:any;

    constructor(name:string, age:number, address:string, time:Date){
        this.name=name;
        this.age=age;
        this.address=address;
        this.time=time;
    }
    getname():string{
        return this.name;
    }

    setname(n:string){
        this.name=n;
    }

    getage():number{
        return this.age;
    }

    setage(n:number){
        this.age=n;
    }

    getaddress():string{
        return this.address;
    }

    setaddress(n:string){
        this.address=n;
    }


}