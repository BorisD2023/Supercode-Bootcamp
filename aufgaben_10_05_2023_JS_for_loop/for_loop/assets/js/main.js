console.log("%c --------- Aufgabe 1_1 ---------", "color: blue; background-color:gold");

for (let i = 0; i <= 10; i++) {
  console.log("Hello World " + i);
}

for (let i = 0; i <= 10; i++) {
  console.log("Hello World", i);
}

console.log("%c --------- Aufgabe 1_2 ---------", "color: blue; background-color:gold");

let numArray = []

for (let i = 0; i <= 10; i++) {
  numArray.push(i)
}
console.log(numArray);

console.log("%c --------- Aufgabe 1_4 ---------", "color: blue; background-color:gold");

let names = ["Freddy", "Steffen", "Finn" ,"Julia", "Farid", "Christian", "Sergio"]
console.log(names);

for (let i = 0; i < names.length; i++) {
  // const element = names[i];
  // console.log(element);
  console.log(names[i]);
}

console.log("%c --------- Aufgabe 2_1 ---------", "color: blue; background-color:gold");

const imageArray = () => {

  let returnArray = []
  
  for (let i = 1; i < 101; i++) {
    // const plusZero = "0";
    
    if (i < 10) {
      // returnArray.push("image_" + plusZero + plusZero + i + ".ipg")
      returnArray.push(`image_00${i}.jpg`)
    } else if (i >= 10){
      // returnArray.push("image_" + plusZero + i + ".jpg")
      returnArray.push(`image_0${i}.jpg`)
    } else{
      // returnArray.push("image_" + i + ".jpg")
      returnArray.push(`image_${i}.jpg`)
    }
  }
  
  console.log(returnArray);
}

imageArray();

console.log("%c --------- Aufgabe 2_2 ---------", "color: blue; background-color:gold");

const outputVal = document.querySelector(".output");
// const inputVal = document.querySelector("#input");

// const loopMe = () => {
//   let loop = inputVal.value;
//   let outLoop = ""
  
//   for (let i = 0; i < loop; i++) {
//     outLoop += "o";
//   }
//   outputVal.innerHTML = "L" + outLoop + "p";
// }

const loopMe = () => {
  let inputVal = Number(document.querySelector("#input").value);

  let numberArray = [];

  for (let i = 0; i < inputVal; i++){
      numberArray.push(`o`);
  }

  numberArray = numberArray.toString();

  numberArray = numberArray.replaceAll(",", "");

  outputVal.innerHTML = `L${numberArray}p`;
}