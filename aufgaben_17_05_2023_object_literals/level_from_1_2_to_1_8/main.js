console.log("%c --------- Aufgabe 1_2 ---------", "color: blue; background-color:gold");

const person = {
    name: "Max",
    age: "25",
    sagNameAlter: () =>{
        alert(person.name + " " + person.age)
        alert(`${person.name} ${person.age}`)
        return 
    },
    // Alternative zu alter schreibweise
    sagNameAlter2: function(){
        alert(person.name + " " + person.age)
        alert(`${person.name} ${person.age}`)
        return }
};
console.log(person);
// Ruft die funktion aus dem Object heraus(siehe HTML)
// console.log(person.sagNameAlter());

console.log(person.name);
console.log(person["name"]);
console.log(person.age);
console.log(person["age"]);

console.log("%c --------- Aufgabe 1_4 ---------", "color: blue; background-color:gold");

let unsereHaustiere = [
    {
      tiertyp: "Katze",
  
      names: [
        "Gipsy",
        "Nala",
        "Dinky"
      ]
    },
    {
      tiertyp: "Hunde",
      names: [
        "Knöpfchen",
        "Pinselchen",
        "Droopy"
      ]
    }
  ];
//   Wiedergabe des Objects in Array
  console.log(unsereHaustiere);

//   Wiedergabe der einzelnen Tiernamen
  console.log(unsereHaustiere[0].names[1]);
  console.log(unsereHaustiere[1].names[2]);
  console.log(unsereHaustiere[0].names);
  console.log(unsereHaustiere[1].names);
  
//   Überschreibung der Hundenamen und wiedergabe
  unsereHaustiere[1].names = ["Balu", "Snoopy"];
  console.log(unsereHaustiere[1].names);
  console.log(unsereHaustiere);
  
//   Objecte - Keys/Entries/values
  const keys = Object.keys(unsereHaustiere)
  console.log(keys);

  const entries = Object.entries(unsereHaustiere)
  console.log(entries);

  const values = Object.values(unsereHaustiere)
  console.log(values);

  console.log("%c --------- Aufgabe 1_5 ---------", "color: blue; background-color:gold");

  let unserLager = {
    schreibtisch: {
      schublade: "Hefter"
    },
    schrank: {
      "Obere Schublade": {
        Ordner1: "Dokumente",
        Ordner2: "Geheimnisse"
      },
      "Untere Schublade": "Cola"
    }
  };

  console.log(unserLager);
//   Geheimnise
  console.log(unserLager.schrank["Untere Schublade"].Ordner2);
  console.log(unserLager["schrank"]["Obere Schublade"]["Ordner2"]);
//   Cola
  console.log(unserLager.schrank["Untere Schublade"]);
//   Hefter
  console.log(unserLager.schreibtisch.schublade);

  console.log("%c --------- Aufgabe 1_7 ---------", "color: blue; background-color:gold");

  let myMusic = [
    {
      artist: "The Beatles",
      title: "Abbey Road",
      release_year: 1969,
      medium: ["LP", "CD", "MC", "Download"],
      gold: true
    },
    {
      artist: "Pink Floyd",
      title: "Dark Side of the Moon",
      release_year: 1978,
      medium: ["CS", "CD", "LP", "Download"],
      gold: true
    },
    {
      artist: "Led Zeppelin",
      title: "Led Zeppelin IV",
      release_year: 1971,
      medium: ["CS", "LP", "Download"],
      gold: true
    },
    {
      artist: "Metallica",
      title: "Kill ’Em All und Ride the Lightning",
      release_year: 1983,
      medium: ["LP", "CD", "MC", "Download"],
      gold: true
    }
  ];
  console.log(myMusic);

  myMusic.forEach(band =>{
        
        if (band.release_year > 1975) {
            document.write(`${band.artist}<br>`);
            document.write(`${band.title}<br>`);
            document.write(`${band.medium}<br>`);
            document.write(band.release_year + "<br><br>")
        }else{
            document.write(`${band.artist}<br>`);
            document.write(`${band.title}<br>`);
            document.write(`${band.medium}<br><br>`);
        }

      
        const html = `<div>
        <p>${band.artist}</p>
        <p>${band.title}</p>
        <p>${band.medium}</p>
        </div><br>`;
      
        document.body.insertAdjacentHTML("afterbegin", html);
      
        console.log(`${band.artist} und ${band.title}`);
  });

  const values2 = Object.values(myMusic[2]);
  console.log(values2);

  console.log("%c --------- Aufgabe 1_8 ---------", "color: blue; background-color:gold");

  let studentData = [
    {
      name: "Alex",
      age: 23,
      coop: false,
      address: {
        street: "Don Valley Business Park",
        city: "Toronto",
        postalCode: "ONM3C3E5"
      },
      emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
      name: "Sandra",
      age: 22,
      coop: true,
      address: {
        street: "34 Lawrence Ave",
        city: "Toronto",
        postalCode: "ONM3C0E5"
      },
      emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
  ];
  console.log(studentData);

  studentData.map(student => {
    console.log(student.name);
    console.log(student.coop);
    console.log(student.address.city);
    console.log(student.emails);
})
