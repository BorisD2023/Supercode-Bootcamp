console.log("%c --------- Aufgabe 1_1 ---------", "color: blue; background-color:gold");

let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
  ];
console.log(languages);

languages.sort();
console.log(languages);

console.log("%c --------- Aufgabe 1_2 ---------", "color: blue; background-color:gold");

let languages2 = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];
  
console.log(languages2);

// languages2.sort();
// console.log(languages2);

// languages2.reverse();
// console.log(languages2);

const languages3 = () => {
  languages2.sort();
  languages2.reverse();
  console.log(languages2);
}
languages3();

console.log("%c --------- Aufgabe 1_3 ---------", "color: blue; background-color:gold");

var numArray1 = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];
console.log(numArray1);

numArray1.sort();
console.log(numArray1);

numArray1.sort((a, b) => a - b);
console.log(numArray1);

console.log("%c --------- Aufgabe 2_2 ---------", "color: blue; background-color:gold");
let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];
console.log(numArray2);

numArray2.sort();
console.log(numArray2);

numArray2.sort((a, b) => a - b);
console.log(numArray2);