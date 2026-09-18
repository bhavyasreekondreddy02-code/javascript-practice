function student()
{
    this.name="Bhavya";
    this.gender ="Female";

}
student.prototype.age =25;
stu1 = new student();
console.log(stu1.name,stu1.gender,stu1.age);
stu2 = new student();
console.log(stu2.name,stu2.gender,stu2.age);