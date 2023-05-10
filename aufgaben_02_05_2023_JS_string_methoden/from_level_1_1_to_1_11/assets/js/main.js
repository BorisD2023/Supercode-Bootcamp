// //* Aufgabe 1_1
console.log("level 1_1");

let firstName = "Boris";
let lastName = "Dürscheidt"
let fullName = firstName + lastName;
console.log("firstName-lenght:", firstName.length);
console.log("lastName-lenght:", lastName.length);
console.log("fullName-lenght:", fullName.length);

// //* Aufgabe 1_2
console.log("level 1_2");

const txt = "How inappropriate to call this planet Earth, when clearly it is Ocean.";
console.log("h", txt.indexOf("h"));
console.log("Earth", txt.indexOf("Earth"));
console.log("Moon", txt.indexOf("Moon"));

//* Aufgabe 1_3
console.log("level 1_3");

let txt2 = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent."
console.log("; :", txt2.search(";"));
console.log("green:", txt2.search("green"));
console.log("blue:", txt2.search("blue"));

//* Aufgabe 1_4

document.write("level 1_4 <br>");
document.write("---------- <br>");

const a = "Susi is going to codingschool";
let susi1 = (a.slice(0,5));
let is = (a.slice(5,8));
let isGoing = (a.slice(5,16));
let school1 = (a.slice(-6));

document.write(susi1 + "<br>" + is + "<br>" + isGoing + " " + school1 + "<br>" + school1 + "<br>" + susi1 + is + school1 + "<br>");
// document.write(a.slice(0, 5) + "<br>" + a.slice(5,8) + "<br>" + a.slice(5,17) + a.slice(-6) + "<br>" + a.slice(-6) + "<br>" + a.slice(0,8) + a.slice(-6));

document.write("---------- <br>");

//* Aufgabe 1_7

document.write("level 1_7 <br>");
document.write("---------- <br>");

const textA = "Sam is good at codingschool";
let bad = (textA.replace("good at codingschool", "bad at school"));
let susi = (textA.replace("Sam is good at codingschool", "Susi is good at school"));
let tennis = (textA.replace("codingschool", "tennis"));

document.write(bad + "<br>" + susi + "<br>" + tennis + "<br>");

document.write("---------- <br>");

//* Aufgabe 1_8

document.write("level 1_8 <br>");
document.write("---------- <br>");

const text = "Sam is going to codingschool";
let origin = (text.slice(0,16)) + (text.slice(-6))
let uppCase = (origin.toLocaleUpperCase());
let var2 = (origin.replace("Sam is going to school", "sam is going at school"));
let lowCase1 = (var2.toLocaleLowerCase());
document.write(uppCase + "<br>");

let lowCase = (origin.toLocaleLowerCase());
document.write(lowCase1 + "<br>");

let var3a = (uppCase.slice(0,4));
let var3b = (uppCase.slice(-7));
let var3c = (lowCase.slice(4,15));
document.write(var3a + var3c + var3b + "<br>");

let var4a = (lowCase.slice(0,4));
let var4b = (lowCase.slice(-7));
let var4c = (uppCase.slice(4,15));
document.write(var4a + var4c + var4b+ "<br>");

let var5a = (uppCase.replaceAll("SAM IS GOING TO SCHOOL","Sam Is Going To School"));
document.write(var5a + "<br>");

// document.write(uppCase + "<br>" + lowCase1 + "<br>" + var3a + var3c + var3b + "<br>" + var4a + var4c + var4b+ "<br>" + var5a);

document.write("---------- <br>");

//* Aufgabe 1_9

document.write("level 1_9 <br>");
document.write("---------- <br>");

const text1 = "Sam is going to codingschool ";
const text2 = "Susi";
const text3 = "and";

let going = (text1.slice(6,16));
let school = (text1.slice(-7));

let var1a = "Sam is";
let var1b = "Susi is";
let var1c = "Susi and Sam are";
let var2a = "and to the movie theater";
let var2b = (var2a.slice(-14));
let var2c = "gym "

document.write(var1a.concat(`${going}` + `${school}` + `${var2a}` + "<br>"));
document.write(var1a.concat(`${going}` + `${var2b}` + "<br>"));
document.write(var1c.concat(`${going}` + `${school}` + "<br>"));
document.write(var1c.concat(`${going}` + `${var2c}` + `${var2a}` + "<br>"));
document.write(var1b.concat(`${going}` + `${school}` + `${var2a}` + "<br>"));

document.write("---------- <br>");

//* Aufgabe 1_11

document.write("level 1_11 <br>");
document.write("---------- <br>");

const x = "Hello "
const y = "World<br>"
let z = x + y;
document.write(z)

let n = x + "" + y;
document.write(n)

let m = x + "World";
document.write(m)

let meinString = "Ich bin Erster "
meinString += "Ich komme auf Platz zwei"
console.log(meinString);