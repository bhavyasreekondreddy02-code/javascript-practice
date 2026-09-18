class Student // class name
{
    setDetails() //method (id,name,grade)
    //constructor(id,name,grade)
    {
         // this it make connection  with class
        this.stdid = 101; // we can id
        this.stdname = "Bhavya"; //name
        this.grade = "A"; //grade
    }
    //display method to print the student details
    display()
    {
        console.log(this.stdid,this.stdname,this.grade);
    }
}
let std = new Student(); // object
std.setDetails(); //it will make access and give details(101,"Bhavya","A") no need for constructor.
 std.display();