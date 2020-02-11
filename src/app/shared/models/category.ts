export class Category
{
	categoryID : number;
	genre : string;

	constructor(categoryID : number, genre : string)
	{
		this.categoryID = categoryID;
		this.genre = genre;
	}
}