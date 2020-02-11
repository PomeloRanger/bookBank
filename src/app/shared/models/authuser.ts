export class AuthUser
{
	userID : number;
	firstName : string;
	lastName : string;
	postalCode : number;
	username : string;
	address : string;
	token : string;

	public AuthUser(UserID:number, 	LastName : string, PostalCode : number, Username : string, Address : string, token : string)
	{
		this.userID = UserID;
		this.lastName = LastName;
		this.postalCode = PostalCode;
		this.username = Username;
		this.address = Address;
		this.token = token;
	}
}