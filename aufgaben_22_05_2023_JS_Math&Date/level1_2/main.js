console.log("%c ======== Aufgabe 1_2 =======","color:green; background:white");

const output = document.querySelector(".output")

let monate = [
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
  
  let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
  ];
  
  let date1 = new Date();
  console.log(date1);
  let date2 = new Date().toLocaleDateString();
  console.log(date2);
  let jahr = date1.getFullYear().toString();
  console.log(jahr);
  let monat2 = date1.getUTCMonth()
  console.log(`${monat2}. Monat`);
  let tag2 = date1.getUTCDay()
  console.log(`${tag2}. Tag`);
  let stunden = date1.getUTCHours();
  console.log(`${stunden} Stunden`);
  let minuten = date1.getUTCMinutes();
  console.log(`${minuten} Minuten`);
  let tag = wochenTag[date1.getDay()];
  console.log(tag);
  let monat = monate[date1.getMonth()];
  console.log(monat);

  output.innerHTML = `${date1} <br><br> ${date2} <br><br> ${jahr} <br><br> ${monat2} Monat <br><br> ${tag2} Tag <br><br> ${stunden} Stunden <br><br> ${minuten} Minuten <br><br> ${tag} <br><br> ${monat}`;