//encapsulation is used to combine data and methods in one unit
class Student
{
    constructor()
    {
        let name,marks;
    }
    getName()
    {
        return this.name;
    }
    setName(name)
    {
        this.name=name;

    }
  getMarks()
    {
        return this.marks;
    }
    setMarks(marks)
    {
        this.marks=marks;

    }
    
}
let std = new Student();
std.setName("Bhavya");
std.setMarks(90);

console.log(std.getName(),std.getMarks());
