export class Quote {
    public showDetails:boolean;
    constructor(public id:number, public quoteBody:string, public author:string, public publishedBy:string, public creationDate:Date){
        this.showDetails=false

    }
}
