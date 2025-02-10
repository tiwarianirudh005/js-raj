const accountId = 144553
let accountEmail = "ani55@google.com"
var accountPassword ="12345"
accountCity = "jaipur"

//accountId = 2// not allowed

accountEmail ="ANU@HC.COM"
accountPassword ="010101"
accountCity = "gurgaon"

console.log(accountId);

/*
prefer not to use
var because of issue in black scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity]);

