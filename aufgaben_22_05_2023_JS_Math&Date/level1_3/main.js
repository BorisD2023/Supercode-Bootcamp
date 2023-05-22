console.log("%c ======== Aufgabe 1_3 =======","color:green; background:white");

const output = document.querySelector(".output")

let date1 = new Date(2222, 9, 23, 13, 25, 11);
console.log(date1);
let date2 = new Date(2222, 9, 23, 13, 25, 11);
date2.setFullYear(2123)
date2.setMonth(1)
date2.setDate(24)
console.log(date2);
let date3 = new Date(2222, 9, 23, 13, 25, 11);
date3.setFullYear(2123)
date3.setDate(24)
date3.setMonth(2)
console.log(date3);
let date4 = new Date(2222, 9, 23, 13, 25, 11);
date4.setFullYear(2123)
date4.setMonth(2)
date4.setDate(3);
console.log(date4);
let date5 = new Date();
console.log(date5);
date5.setDate(date5.getDate() + 30);
console.log(date5);

output.innerHTML = `${date1} <br><br> ${date2} <br><br> ${date3} <br><br> ${date4} <br><br> ${date5}`;