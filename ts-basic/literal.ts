// literal data type are that some values it act as dictionary or can be act as enums but they are not same


const getUserDetail = (names: 'alex' | 'ramesh'| 'govinda')=> {
   
    console.log(names);
}

getUserDetail('ramesh') // it will accept data of alex ramesh or govinda in one of these.


const names : ('alex' | 'ramesh' | 200) = 200;  

// we can write literal this way too  you can remove parantheses too it just for good readability

console.log(names);