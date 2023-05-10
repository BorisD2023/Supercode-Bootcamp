

document.write(" --------- Aufgabe 3_2 ---------", "<br>");

let numArr = [5, 22, 15, 100, 55]

for (let i = 0; i < numArr.length; i++) {
  for (let j = 2; j < numArr[i]; j++) {
    if(numArr[i] % j == 0){
      document.write(`${numArr[i]} lässt sich durch ${j} teilen! Das Ergebnis ist ${numArr[i]/j} <br>`)
    }   
  }
}