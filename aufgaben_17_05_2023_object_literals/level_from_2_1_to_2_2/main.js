console.log("%c --------- Aufgabe 2_2 ---------", "color: blue; background-color:gold");

const singers = [
	{ name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
	{ name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
	{ name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B"},
	{ name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock"},
	{ name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica"},
	{ name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock"},
	{ name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop"},
	{ name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock"},
  ];

singers.sort((a, b) =>{

  let letterA = a.name;
  let letterB = b.name;

  if (letterA < letterB) {return -1;}
  if(letterA > letterB){return 1}
  return 0;
})

console.log(singers);

// Alternative Kurzschreibweise
singers.sort((a, b) => a.name.localeCompare(b.name));

console.log(singers);

console.log("%c --------- Aufgabe 2_1 ---------", "color: blue; background-color:gold");

let edelMetallPreise = [
  { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
  { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
  { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
  { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
  { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
  { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
  { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
  { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
  { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
];

console.log(edelMetallPreise);

// Erstellen eines leeren Arrays
const nameArray = [];
edelMetallPreise.forEach((metal) => {
  return nameArray.push(metal.name);
});

console.log(nameArray);

edelMetallPreise.map((metal) =>{
  console.log(metal.name);
});

const preisArray = [];
edelMetallPreise.forEach((preise) => {
  return preisArray.push(preise.preiseGramEuro);
});

console.log(preisArray);

edelMetallPreise.map((preise) =>{
  console.log(preise.preiseGramEuro);
});

const veränderungsArray = [];
edelMetallPreise.forEach((change) => {
  return veränderungsArray.push(change.veraenderung);
})
console.log(veränderungsArray);

edelMetallPreise.map((change) =>{
  console.log(change.veraenderung);
})

const checkPreis = (elm) =>{
  return elm.preiseGramEuro > 50;
}

const preisChanges = edelMetallPreise.filter(checkPreis);
console.log(preisChanges);

// Die überschriften Stylen, erste Buchstabe Gross
  let nameStyle = Object.keys(edelMetallPreise[0])[0];
  let preisStyle = Object.keys(edelMetallPreise[0])[1];
  let changeStyle = Object.keys(edelMetallPreise[0])[2];
  const name2 = nameStyle.charAt(0).toUpperCase() + nameStyle.slice(1);
  const preis2 = preisStyle.charAt(0).toUpperCase() + preisStyle.slice(1);
  const change2 = changeStyle.charAt(0).toUpperCase() + changeStyle.slice(1);
  console.log(name2,preis2,change2);

  const test = Object.keys(edelMetallPreise[0])[0].toLocaleUpperCase()
  console.log(test);

// Tabellen funktion
const creatTable = () =>{
  // Tabelle erstellen
  let table = document.createElement("table");
  // Tabellen grundstrucktur
  let tablePart1 = `
  <tr>
    <th>${name2}</th>
    <th>${preis2}</th>
    <th>${change2}</th>
  </tr>`;
  //  Tabelleninhalt 
  for (let i = 0; i < edelMetallPreise.length; i++) {
    tablePart1 += `<tr>
    <td>${edelMetallPreise[i].name}</td>
    <td>${edelMetallPreise[i].preiseGramEuro}</td>
    <td>${edelMetallPreise[i].veraenderung}</td>
    </tr>`;
  }
  // Tabelle in die HTML einfügen
  table.innerHTML = tablePart1;
  document.body.appendChild(table);
}
// Funktion ausführen
creatTable();
