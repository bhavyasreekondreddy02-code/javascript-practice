//object creation
//this are the properities
let person = 
{
    firstname : "Bhavya",
    lastname  : "sree",
    age : 25,
    weight :59
}
// Accessing the object properities
//console.log(person["firstname"]);
//console.log(person.age);



//we can do operations
//Add new property to the Existing properties 
person["height"] = 5.3;// we can update like this also person.height = 5.2
console.log(person["height"]);

// updating the existing vslue
person["age"] = 18;
console.log(person.age);

//Remove the property from object
delete person["age"];
console.log(person["age"]); // it give undefined 


console.log("******************looping object**********************");
//for in loop
// it designed for javascript objects
for(let x in person)
{
    //console.log(x); // prints only the property names
    //console.log(person[x]); // print only the property values
    console.log(x+ " "+person[x]);
}