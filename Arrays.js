/*array it used to store multiple values in a single variable
let cars = ["BMW","Volo","Thar"];
//let cars = new cars("BMW","Volvo","Thar");
//console.log(cars);
// arrays is listing the multiple values in a single variable
cars[0] = "Bugatti"; //updating the array 
console.log(cars)

//we can have different type of variables in the same array
let myarray = [100,"Bhavya",10.15,true];
console.log(myarray);
*/

//we can have  objects in a Array
let person1 =
{
    name : "Bhavya",
    age : 25

};
let person2=
{
    name : "Estella",
    age : 18
};
//let myarray1=[person1,person2];
//console.log(myarray1);
//console.log(myarray1[0]);
//javascript array holds number,string,boolean and objects.
let fruits = ["Kiwi","Pineapple","Apple"];
//length of the array
console.log(fruits.length);
//read the data inside the array
//arr[0] -- index  value
for(let i =0;i<=fruits.length-1;i++)
    // if we dont the length we can use fruits.length-1
{
    console.log(fruits[i]);
}
//looping elements for of loop
// it will get the all elements from the array
//for of loop is used in array concept in javascripit
for(ele of fruits)
{
    console.log(ele);
}
//Recognize an Array
console.log(typeof fruits);
console.log(Array.isArray(fruits));