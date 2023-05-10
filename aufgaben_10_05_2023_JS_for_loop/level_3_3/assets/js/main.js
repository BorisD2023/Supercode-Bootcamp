

console.log("%c --------- Aufgabe 3_3 ---------", "color: blue; background-color:gold");

const outputVal = document.querySelector(".output");
const inputVal = document.querySelector("#input");

const loopMe = () => {
  let loop = inputVal.value;
  let outLoop = ""
  
  if(loop == 0){
    outputVal.innerHTML = `Error, die Eingabe ${loop} ist nicht gültig!`;
    return;
  }

  if(loop % 2 == 0)
    for (let i = 0; i < loop; i++){
      outLoop += "o";
  }else{
    for (let i = 0; i < loop; i++) {
      if(i % 2){
        outLoop += "0";
      }else{
        outLoop += "o"
      }
    }
  }
  outputVal.innerHTML = "L" + outLoop + "p";
}
