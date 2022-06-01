// nullish coalescing is very useful suppose you are fetching value from backend and suppose the value comes in null or undefined formate 
// then you want something to fall back to other value then it can be usefull


// if value is null or undefined then default value will get evaluated or you can say it get fall back
const data = undefined;

const storedata  = data ?? 'Default value'

console.log(storedata);
