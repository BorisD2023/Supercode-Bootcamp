console.log("%c ======== Aufgabe 1_5 =======","color:green; background:white");

const monthName = (dateString) =>{

let list = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
  ];

  let newDate = new Date(dateString);
  let getMonth = newDate.getMonth()
  return list[getMonth];
}

console.log(monthName("2001,3,4")); //März
console.log(monthName("2019,12,24")); //Dezember
console.log(monthName("1410,07,15")); //Juli


//! Alternative

let list = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
  ];

const monatsNamen = (jahr, monat, tag) =>{
    monat--;
    let date = new Date(jahr, monat, tag)
    let getMonth = date.getMonth();
    console.log(list[getMonth]);
    
}

monatsNamen(2001,3,4)
monatsNamen(2019,12,24)
monatsNamen(1410,07,15)
monatsNamen(2023,05,22)