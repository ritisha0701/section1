const arr = [ 344, 'hello', true, 344.56, undefined ];

console.log(typeof arr); // typeof array use kregye toh hme object hi show krega
console.log(Array.isArray(arr));//Array.isArray ka use kregye toh hme btyega ki ye array hai ki nhi agr hai toh true nhi toh false

console.log(arr.length);//arr.length is used to find the number of element in array

const movies = [ 'Avengers', 'Animal', 'Deadpool', '1920', 'Batman' ];

//indexing
console.log( movies[2] );//ismei left side se count krega and tb display hoga
console.log( movies.indexOf('Batman') );//indexof isly tb use krte hai jb hme hmre element ka index na pta ho
console.log( movies.indexOf('Superman') );//iska index -1 show krega kyuki ye hmre array mei exist hi nhi krta hai 
console.log( movies[100] );//ye isly undefined hai kuki iss index value pr koi element hai hi nhi
console.log( movies.at(-3) );//ismei right side se count krega and tb display hoga

//slicing 
console.log( movies.slice(1,4) );
console.log( movies.slice(1,5) );
console.log( movies.slice(1,50) );

//adding and removing elements 
movies.push('Superman');// push is used to add at the end of the array
movies.unshift('Flash');// unshift is used to add at the start of the array
console.log(movies);

movies.pop();//pop is used to remove from the end of the array
movies.shift();//shift is used to remove from the start of the array\
console.log(movies);

//splice is a multipurpose element because it used to delete,replace and insert the element 
//movies.splice(2,2);//removes 2 elements from the index 2 
//splice ka use krte hai toh hm phle apni arrray se jis bhi index value se delete krna hai vo value dete hai and jitne value delete krna hai utte number dedete hai
//movies.splice(2, 2,'Deadpool 2','1920 evil returns')//replaces 2 elements in array
movies.splice(2, 0,'Deadpool 2','1920 evil returns')//insert 2 element in array
console.log(movies);

