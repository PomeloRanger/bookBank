export class AuthUser
{
	UserID : Number;
	FirstName : String;
	LastName : String;
	PostalCode : Number;
	Username : String;
	Address : String;
	Token : String;

	public AuthUser(UserID:Number, 	LastName : String, PostalCode : Number, Username : String, Address : String, Token : String)
	{
		this.UserID = UserID;
		this.LastName = LastName;
		this.PostalCode = PostalCode;
		this.Username = Username;
		this.Address = Address;
		this.Token = Token;
	}
}