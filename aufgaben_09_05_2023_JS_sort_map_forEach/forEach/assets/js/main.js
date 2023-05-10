console.log("%c --------- Aufgabe 1_1 ---------", "color: blue; background-color:gold");
document.write("--------- Aufgabe 1_1 ---------", "<br>");

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
document.write(getraenke);

getraenke.sort();
console.log(getraenke);
document.write("<br>",getraenke, "<br>");

// getraenke.sort = ((a, b) => a - b);
// console.log(getraenke);

getraenke.forEach((getraenke) => (console.log(getraenke), document.write(getraenke, "<br>")));

console.log("%c --------- Aufgabe 1_5 ---------", "color: blue; background-color:gold");
document.write("--------- Aufgabe 1_5 ---------", "<br>");

let checkNumber = [
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

console.log(checkNumber);

const checkNumber2 = checkNumber.map((a) => {
    if(a % 3 == 0){
      return a + 100;
    }else{
      return a;
    }
});

console.log(checkNumber2);

console.log("%c --------- Aufgabe 1_6 ---------", "color: blue; background-color:gold");
document.write("--------- Aufgabe 1_6 ---------", "<br>");

let album = [
  "holidays.jpg",
"Restaurant.jpg",
"desktop",
"rooms.GIF",
"DOGATBEACH.jpg",
]

console.log(album);

let album2 = album.map((item) => item.toLocaleLowerCase());
console.log(album2);

const change = (element) => {
    if(element.includes(".jpg") == true){
      console.log(element.replace(".jpg",""));
      return element.replace(".jpg","");
    }else if(element.includes(".gif",) == true){
      console.log(element.replace(".gif", ""));
      return element.replace(".gif", "");
    }else{
      console.log("invalid");
      return "invalid";
    }
}

album2.map(change);
let newAlbum = album2.map(change);
console.log(newAlbum);

let album3 = album2.map((items) => 
  items.indexOf(".") === -1
  ? (items = "invalid")
  : items.slice(0, items.indexOf(".")).toLocaleLowerCase());

  console.log(album3);