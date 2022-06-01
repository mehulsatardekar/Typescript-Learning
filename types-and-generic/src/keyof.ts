
// the keyof is act as to be a part of T
/* Means U will be a key of T

 T => object
 U => key

 can be represent as => T[U]

*/



const userDetails = <T extends object, U extends keyof T>(obj:T, key:U)=>{
    return obj[key]
}

userDetails({username:'Max'}, 'username') // so if we pass another key instead of username (is key here) will throw an error

