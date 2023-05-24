console.log("%c ======= Aufgabe 1_2 =======", "color:red; background:white");

let counter = document.querySelector(".zeit");
let counter2 = 100;

document.querySelector("#btn").addEventListener('click', () => {

    let myInterval = setInterval(() =>{
        counter2--;
        counter.innerHTML = `${counter2}%`
        if (counter2 === 0) {
            clearTimeout(myInterval)
            counter2 = 100;
        }
    },100)
})
