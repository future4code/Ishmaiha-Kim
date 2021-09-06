export class Product {
    private id:string
    public name: string
    public description: string
    public price: number

    constructor(
        productId: string,
        productName: string,
        productDescription: string,
        productPrice: number,
    ){
        this.id = productId
        this.name = productName
        this.description = productDescription
        this.price = productPrice
    }

    public getProductId():string{
        return this.id
    }

    public getProductName():string{
        return this.name
    }

    public setProductName(newProductName: string){
        return this.name = newProductName
    }

    public getProductDescription():string{
        return this.description
    }

    public setProductDescription(newProductDescription:string){
        this.description = newProductDescription
    }

    public getProductPrice():number{
        return this.price
    }

    public setProductPrice(newProductPrice:number){
        this.price = newProductPrice
    }
    
}