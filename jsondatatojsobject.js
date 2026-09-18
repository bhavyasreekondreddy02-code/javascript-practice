//json format
//json array - multiple items in the array
let text = '{"employees":[' +
'{"firstName":"Bhavya","lastName":"Sree"},' +
'{"firstName":"Estella","lastName":"panda"},' +
'{"firstName":"Ben","lastName":"Harry"}]}';

let obj = JSON.parse(text);
console.log(obj.employees[1].firstName+" "+obj.employees[1].lastName);
