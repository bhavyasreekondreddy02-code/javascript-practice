let s = "welcome";
//let s = new String();

//charAT() - this method help us to extract the charater from string
console.log(s.charAt(2)); // l

//concat() - this method help us to merge different strings
console.log(s.concat(" to javascripit programming")); // welcome to javascript programming
console.log(s.concat("to javascripit").concat("programming")); //welcome to javascript programming

//replace() - this help us replace some string in array
s = "welcome to javascript"
console.log(s.replace("javascript","java"));

//substring() - to get some string till some point using index value.
s="welcome";
console.log(s.substring(0,3)); // wel
console.log(s.substring(0,7)); //welcome

//toLowercase() & toUppercase() - to convert entire string into lower and uppercase
console.log(s.toLowerCase());//welcome
console.log(s.toUpperCase());//WELCOME

//split() - this help us to split the strings with any special character or space.
s="welcome to javascript"
let arr =s.split(' ');

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

//trim() - it will help us to trim the space from the strings
s="  welcome  ";
console.log(s.trim())

//***********************NUMBERS****************************
//let x=100;
//let x = new Number(100);

let x =102; //Integer value
let y = 102.7; //decimal
let z =10e2 // 10 power of 2 exponencial value

console.log(x,y,z);

//isInteger()
x=10;
y=1.8;
z="x";

console.log(Number.isInteger(x));//true
console.log(Number.isInteger(y));//false
console.log(Number.isInteger(z));//false

//parseInt() - converts a string into number
s="234557589459825";
console.log(typeof(s));//String
console.log(typeof(Number.parseInt(s)));//number

//parseFloat()
s="2345575.89459825";
console.log(typeof(s));//String
console.log(typeof(Number.parseFloat(s)));//number

//toString() - to convert the number to string
let n = 1234;
console.log(typeof(n));
console.log(typeof(Number.toString(n)));



