const accountId = 144553 
let accountEmail = "sandip@gmail.com"
var accountPassword = "12345" // this is not used because of its scoping problem
accountCity = "Purba Bardhaman"
let accountState;

// accountId = 2 //not allowed 

accountEmail = "hc@gmail.com"
accountPassword = "6789"
accountCity = "Kolkata"

console.table([accountEmail,accountPassword,accountCity,accountState])

console.log(accountId);
