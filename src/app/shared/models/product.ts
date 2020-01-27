export class Product 
{
	productID : number;
	productName: string;
	productDescription: string;
	productPrice: number;
	rating: number;

	constructor(productID:number, productName:string,productDescription:string, productPrice:number, rating:number)
	{
		this.productID = productID;
		this.productName = productName;
		this.productDescription = productDescription;
		this.productPrice = productPrice;
		this.rating = rating;
	}
}