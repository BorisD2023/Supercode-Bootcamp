console.log("%c ======== Aufgabe 1_1 =======","color:green; background:white");

const output = document.querySelector(".output");

let date1 = new Date();
let date2 = new Date("September 2, 2019 09:00:00")
let date3 = new Date(0)
let date4 = new Date(31556908800)
let date5 = new Date(86400000)
output.innerHTML = `${date1} = new Date() <br><br> ${date2} = new Date("September 2, 2019 09:00:00") <br><br> ${date3} = new Date(0) <br><br> ${date4} = new Date(31556908800) <br><br> ${date5} = new Date(86400000)`;


  
  