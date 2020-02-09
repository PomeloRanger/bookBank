export class Register
{
	FirstName : string;
	LastName : string;
	Username : string;
	Password : string;
	PostalCode : Number;
	Address : string

	constructor(FirstName: string, LastName : string, Username : string, Password : string, PostalCode : Number, Address : string)
	{
		this.FirstName = FirstName;
		this.LastName = LastName;
		this.Username = Username;
		this.Password = Password;
		this.PostalCode = PostalCode;
		this.Address = Address;
	}
}