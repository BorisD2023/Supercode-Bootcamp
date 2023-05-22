console.log("%c ======== Aufgabe 2_1 =======","color:green; background:white");

const output = document.querySelector(".output");

const datum = () =>{
  let date = new Date()
  let day = date.getDate();
  let month = date.getMonth() + 1;

  if(month < 10){
    month = `0${month}`};

  if(day < 10){
   day = `0${day}`};

  let getDate = `${day}/${month}/${date.getFullYear()}`
  
  return getDate
}

output.innerHTML = datum();
output.style.fontSize = "30px"
output.style.fontWeight = "bold"

