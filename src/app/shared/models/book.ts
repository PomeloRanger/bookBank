import { Publisher } from './publisher';
import { Category } from './category';
import { Author } from './author';

export class Book
{
	bookID : number;
	title : string;
	description: string;
	price: number;
	imageUrl : string;
	isbN_10 : string;
	isbN_13 : string;
	publishers : Publisher[];
	categories : Category[];
	authors : Author[];

	constructor(bookID:number, title:string, imageUrl: string, description:string, isbN_10:string, isbN_13:string, price:number, publishers:Publisher[], categories:Category[], authors:Author[])
	{
		this.bookID = bookID;
		this.imageUrl = imageUrl;
		this.title = title;
		this.description = description;
		this.isbN_10 = isbN_10;
		this.isbN_13 = isbN_13;
		this.price = price;
		this.publishers = publishers;
		this.categories = categories;
		this.authors = authors;
	}
}