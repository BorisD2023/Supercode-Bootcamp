console.log("%c ======= Aufgabe 1_1_a =======", "color:red; background:white");

console.log("Start Warten für 3 Sekunden...");
const showLog = () => {
    console.log("Erledigt. Du hast 3 Sekunden verschwendet.");
} 

setTimeout(showLog, 3000);

console.log("%c ===== Aufgabe 1_1b =======", "color:red; background:white");

let counter = 11;
const intervalFunction = setInterval(() =>{

    counter--;
    console.log(counter);
    if (counter == 1) {
        console.log("Endlich Feierabend");
        clearTimeout(intervalFunction)
        setTimeout(logDelet, 3000)
        
    }

}, 1000);

const logDelet = () =>{
    console.clear()
}
