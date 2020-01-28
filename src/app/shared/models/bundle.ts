import { Book } from './book';

export class Bundle
{
	bundleID : number;
	bundlePrice : number;
	books: Book[];

	constructor(bundleID:number, bundlePrice:number, books:Book[])
	{
		this.bundleID = bundleID;
		this.bundlePrice = bundlePrice;
		this.books = books;
	}
}