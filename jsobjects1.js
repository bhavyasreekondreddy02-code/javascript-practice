     let employee =
     {
        empname :"Bhavya",
        empid :123,
        job : "Qa Automation",
        basicsal : 70000,
        bonus : function()
        {
            return((this.basicsal * 10/100));
        }


     }; // object should end with;
     console.log(employee["empname"]);

     console.log(employee.bonus()); // it will call function from the object and perform action. 

    