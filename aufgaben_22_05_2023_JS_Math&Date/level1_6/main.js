console.log("%c ======== Aufgabe 1_6 =======","color:green; background:white");

const timeState = (newDateString) =>{
  let date = newDateString;
  let gethour = date.getHours();
  const bestimmen = 
  gethour < 12
  ? "AM"
  : "PM";
  console.log(`${gethour} ${bestimmen}`);
}

timeState(new Date(1999, 10, 5, 15))//PM
timeState(new Date())//je nach aktueller Zeit
timeState(new Date(2019, 12, 3, 12))//PM
timeState(new Date(2000, 1, 1, 11))//AM
