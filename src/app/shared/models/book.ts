import { Publisher } from './publisher';
import { Category } from './category';
import { Author } from './author';

export class Book
{
	bookID : number;
	bookName : string;
	imageUrl : string;
	bookDescription: string;
	isbn_10 : string;
	isbn_13 : string;
	bookPrice: number;
	rating: number;
	publishers : Publisher[];
	categories : Category[];
	authors : Author[];

	constructor(bookID:number, bookName:string, imageUrl: string, bookDescription:string, isbn_10:string, isbn_13:string, bookPrice:number, rating:number, publishers:Publisher[], categories:Category[], authors:Author[])
	{
		this.bookID = bookID;
		this.imageUrl = imageUrl;
		this.bookName = bookName;
		this.bookDescription = bookDescription;
		this.isbn_10 = isbn_10;
		this.isbn_13 = isbn_13;
		this.bookPrice = bookPrice;
		this.rating = rating;
		this.publishers = publishers;
		this.categories = categories;
		this.authors = authors;
	}
}