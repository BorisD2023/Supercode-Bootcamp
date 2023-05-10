
console.log("--------Aufgabe_1_1_-----------");
console.log(Math.PI);
const pi = Math.PI;
const roundedPI = Number(pi.toFixed(2));

console.log({roundedPI});
// console.log( Number(pi.toFixed(2)));

console.log("--------Aufgabe_1_2_-----------");

const roundIt = () => {
    let array = [3.14,193.4464,0.8596433607,-2.940629089,];
    array.forEach((value) =>{
        let round = Math.round(value);
        console.log({round});
    })
}

roundIt()

console.log("--------Aufgabe_1_3_-----------");

const randomNum = Math.random();
console.log({randomNum});
console.log(Math.floor(randomNum));

const randomNum1 = Math.random() + 1;
console.log({randomNum1});
console.log(Math.floor(randomNum1));

const randomNum1_10 = Math.random() * 10;
console.log({randomNum1_10});
console.log(Math.floor(randomNum1_10));

const randomNum1_100 = Math.random() * 100;
console.log({randomNum1_100});
console.log(Math.floor(randomNum1_100));

console.log("--------Aufgabe_2_1_-----------");

const roundTo = (zahl,genauigkeit) => {
    console.log(Number(zahl.toFixed(genauigkeit)));
};

roundTo(3.1415926535,5)

console.log("--------Aufgabe_2_2_-----------");

const randomNumb = Math.random() * 10;
const floorNumb = Math.floor(randomNumb);


schätzen = prompt("Schätzen Sie eine Nummer zwischen 1 und 10")
if (schätzen != floorNumb) {
    alert("Du hast verloren, die Nummer lautet: " + floorNumb);
    console.log("Du hast verloren, die Nummer lautet: " + floorNumb);
} else {
    alert("Sie haben Gewonen!");
    console.log("Sie haben Gewonen! " + floorNumb);
}