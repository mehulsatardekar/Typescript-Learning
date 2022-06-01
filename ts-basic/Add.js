// unknown is a bit diiferent from any we might dont differ out or may get confused but it's more adivisable to use unknows than any
var names;
var username;
names = 12;
names = 'alex';
// here even though we have assigned variable which contain string but its giving an error cause of it not sure that evry time it will 
// have string type data . but if you change it to any it wont give an error thats the reason we should prefer unknown over any
// it doesn't mean that we should ditch any its the matter of chaoice when to use what
//username = names // gives an static type check error
// to make it error prone just check the type
if (typeof names === 'string') {
    username = names;
}
