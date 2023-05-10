console.log("%c --------- Aufgabe 1_2 ---------", "color: blue; background-color:gold");
document.write("--------- Aufgabe 1_2 ---------", "<br>");

let getraenke = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta"
]

console.log(getraenke);

let upperDrinks = getraenke.map((drinks) => {
  return drinks.toUpperCase();
})
console.log(upperDrinks);

let upperDrinks2 = getraenke.map((drinks) => drinks.toUpperCase());
console.log(upperDrinks2);


console.log("%c --------- Aufgabe 1_3 ---------", "color: blue; background-color:gold");
document.write("--------- Aufgabe 1_3 ---------", "<br>");

let array = [
  18,
  16,
  80,
  51,
  47,
  38,
  95,
  42,
  68,
  61,
  34,
  51,
  20,
  17,
  56,
  31,
  100,
  6,
  5,
  30,
  74,
  97,
  28,
  99,
  91,
  27,
  73,
  12,
  92,
  6,
  27,
  71,
  26,
  15,
  78
];

let sortfunction = array.sort((a,b) =>{
  return a - b;
})

console.log(array)

let multy = array.map((a) =>{
  return a * 2;
})

console.log(multy);

console.log("%c --------- Aufgabe 1_4 ---------", "color: blue; background-color:gold");
document.write("--------- Aufgabe 1_4 ---------", "<br>");

let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

let umwandeln = fahrenheit.map((a) =>{
  // return ((a - 32) / 1.8).toFixed(); 
  return Math.round((a - 32) / 1.8); 
})

console.log(umwandeln);