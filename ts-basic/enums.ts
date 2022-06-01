// Enums

// enums are just a collection of data

// enums with initialized values
enum users {
    Admin = 'Admin',
    Sub_Admin ="Sub_Admins",
    Role_Admin ="Role_Admins"
};


// enums with hetrogenous values
enum users2 {
    Admin=1,
    Admin_Role="Admin",
    Sub_Admin=2,
    Sub_AdminRole="SubAdmin"
}
console.log(users2.Admin);


// enums with numbers 

enum userNumber {
    userNo1 = 1,  
    userNo2 =2
}

// we can assign first value to the property of enums and then even it increases the value one by one

enum primaryKey{
    key1 =1,
    key2, // it will increment value by one
}

console.log(primaryKey.key1);
console.log(primaryKey.key2);

