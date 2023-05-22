const outputDay = document.querySelector(".day")
const outputHours = document.querySelector(".hours")
const outputMinutes = document.querySelector(".minutes")
const outputSeconds = document.querySelector(".seconds")
const outputPeriod = document.querySelector(".period")

const uhr = () =>{
    let date = new Date()
    console.log(date);

    //! Tagesanzeige
    let weekDay = date.toLocaleString("default", { weekday: "short"})
    outputDay.innerHTML = weekDay;

    let hours = date.getHours();
    outputHours.innerHTML = hours < 10
        ? `0${hours}` : `${hours}`  
        
    //! Minutenanzeigen
    let minutes = date.getMinutes();
    outputMinutes.innerHTML = `${minutes}`;
    if (minutes < 10) {
        outputMinutes.innerHTML = `0${minutes}`; 
    }
    //! Sekundenanzeige
    let seconds = date.getSeconds();
    outputSeconds.innerHTML = `${seconds}`;
    if(seconds < 10){
        outputSeconds.innerHTML = `0${seconds}`;
    }

    //! Period
    if (hours < 12) {
        outputPeriod.innerHTML = "AM"
    }else{
        outputPeriod.innerHTML = "PM"
    }
    setTimeout(uhr, 1000)
}

uhr()