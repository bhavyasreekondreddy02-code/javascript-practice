//date object
let d = new Date(); // today date and time
//console.log(d);

console.log(d.getDate()); // 13 1-31
console.log(d.getMonth()); // 8 0-11
console.log(d.getFullYear());// 2026 current year

// single format
console.log(d.getDate()+"/"+d.getMonth()+"/"+ d.getFullYear());

// hours format
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());

//single format
console.log(d.getHours()+"hr "+d.getMinutes()+"m" +d.getSeconds()+"s");