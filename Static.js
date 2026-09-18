class Test
{
    static a =100; //static variable
    b =200; //non-static variable
    static m1()
    {
        console.log("This is m1 static method....")

    }
    m2()
    {
        console.log("This is m2 static method...")
    }
}
//we can directly access static variables and methods using class name
console.log(Test.a); // 100
console.log(Test.b); //undefined
//we are calling the method.
//we cant call the non static methods it will throws error.
//we can diectly call static methods and static variable with using class name.
Test.m1(); // This is  m1 static method....
//Test.m2(); //error, incorrect

//we can access non static variables and methods using object
let t = new Test(); //object
console.log(t.b);//200
t.m2(); //This is m2 static method...