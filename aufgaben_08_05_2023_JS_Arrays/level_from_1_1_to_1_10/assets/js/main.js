console.log("%c ---------- Aufgabe 1_1 ----------", "color:yellow");

const person = ["James","Bond","007"]
console.log(person);
const friends = ["Chris", "Timo", "Paul"]
console.log(friends);
const favoriteFood = ["Pizza","Pasta","Döner"]
console.log(favoriteFood);

console.log("%c ---------- Aufgabe 1_2 ----------", "color:yellow");

console.log(person[0]);
console.log(person[1]);
console.log(person[2]);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(favoriteFood[0]);
console.log(favoriteFood[1]);
console.log(favoriteFood[2]);

console.log("%c ---------- Aufgabe 1_3 ----------", "color:yellow");

console.log(person.length);
console.log(friends.length);
console.log(favoriteFood.length);

console.log("%c ---------- Aufgabe 1_4 ----------", "color:yellow");

console.log(person.length);
let person2 = person.push("Killer","Agent");
console.log(person2);
console.log(person);

console.log(friends.length);
console.log(friends.push("Lisa","Magda"));
console.log(friends);

console.log(favoriteFood.length);
console.log(favoriteFood.push("Salat","Donuts"));
console.log(favoriteFood);

console.log("%c ---------- Aufgabe 1_5 ----------", "color:yellow");

console.log(person);
let person3 = person.pop();
console.log(person3);
console.log(person);

console.log(friends);
// let friends1 = friends.pop();
console.log(friends.pop());
console.log(friends);

console.log(favoriteFood);
let favoriteFood2 = favoriteFood.pop();
console.log(favoriteFood2);
console.log(favoriteFood);

console.log("%c ---------- Aufgabe 1_6 ----------", "color:yellow");

console.log(person);
let person4 = person.shift();
console.log(person4);
console.log(person);

console.log(friends);
console.log(friends.shift());
console.log(friends);

console.log("%c ---------- Aufgabe 1_7 ----------", "color:yellow");

console.log(friends);
let friends2 = friends.unshift("Arthur")
console.log(friends2);
console.log(friends);
let friends3 = friends.unshift("Marzzio")
console.log(friends3);
console.log(friends);

console.log(favoriteFood);
console.log(favoriteFood.unshift("Pommes","Reis"));
console.log(favoriteFood);

console.log("%c ---------- Aufgabe 1_9 ----------", "color:yellow");

let reiseziel = ["Schweiz","Japan","Australien","USA","Peru"];
console.log(reiseziel);
let lieblingsReiseZiel = reiseziel.slice(1,3);
console.log(lieblingsReiseZiel);
console.log(reiseziel.slice(-1));
console.log(reiseziel);

console.log("%c ---------- Aufgabe 1_10 ----------", "color:yellow");

const text = "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards."
console.log(text);

const var1 = text.split(".")
console.log(var1);

const var2 = text.split(" ")
console.log(var2);

const var3 = text.split("")
console.log(var3);
console.log(var3.slice(3,6));

