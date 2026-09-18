let fruits =["pineapple","Kiwi","Mangoes"]
//toString() &join()
console.log(fruits.toString()); // this methosd is used to separate array values with(,)

//join()
//it is a flexible method
console.log(fruits.join("*"));// this method is used is used to separate array value with any specife value 



// pop() - it will remove the last element in the array and it will return the last element
console.log(fruits.pop()) //removed element printed
console.log(fruits) // it will give  remaining elements


// push() - it will help  to add new element  at the end of array
console.log(fruits.push("Apple")); // length of the array it will show
console.log(fruits);


//shift() - it will remove the first element in the array and shift other element into lower index.
let fruits2 =["Cherry","Strawberry","plump"]
fruits2.shift(); //
console.log(fruits2.shift()); // strawberry
console.log(fruits2);


//unshift() - it will add the first element in the array and shift the other elements into lower index
//fruits2.unshift("Watermelon"); - it wll add  element in first in array 
console.log(fruits2.unshift("Watermelon")); // it will give length of the array
console.log(fruits2);

//delete - keyword is used to delete element in the array
delete fruits2[0];
console.log(fruits2);


//concat() - joining/merging 2 or more arrays
let arr1=[10,20];
let arr2=["a","b","c"];
console.log(arr1.concat(arr2));

//more than two arrays merging
let arr3=["x","y","z"];
console.log(arr1.concat(arr2,arr3));

//slice()- it will get some element in the array
let names =["Bhavya","Sree","Estella","Sweety","Honey"]
console.log(names.slice(1));


//** sort() - it will sort the element in the array
//sort() method help us to sort in alphabet order or ascending order
console.log(names.sort());

let nums =[100,700,300,500,400,600,900]
console.log(nums.sort());

//reverse() - it will reverse the elements in the array and also it will impact the array it is different from the rest of the array methods.
console.log("original array elements are:"+names);
names.reverse(); // method is for reversing the array elements.
console.log("After using reverse array elements are:"+names);


