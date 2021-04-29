export class Citoyen{
    public name:string;
    public age:number;
    public address:string;
    public symp:boolean;
    public time:any;
    constructor(name:string, age:number, address:string, symp:boolean){
        this.name=name;
        this.age=age;
        this.address=address;
        this.symp=symp;
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
    getsymp():boolean{
        return this.symp;
    }

    setsymp(n:boolean){
        this.symp=n;
    }

}