console.log("%c ======= Aufgabe 1_9 =======", "color:red; background:white");



const startTime = () =>{
    let newDate = new Date();
    let std = newDate.getHours();
    let min = newDate.getMinutes();
    let sec = newDate.getSeconds();
    let heute = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    if (heute < 10) {
        heute = `0${heute}`
    }
    if (month < 10) {
        month = `0${month}`
    }
    if (std < 10) {
        std = `0${std}`
    }
    if (min < 10) {
        min = `0${min}`
    }
    if (sec < 10) {
        sec = `0${sec}`
    }

    document.getElementById("txt").innerHTML = `Aktulle Datum:<br>${heute}/${month}/${year}<br>Aktulle Zeit:<br>${std}:${min}:${sec}`
    setInterval(startTime, 1000);
}