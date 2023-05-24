let counter = 10;
const div = document.querySelector(".message");

const myInterval = setInterval(() =>{
    counter--;
    if (counter <= 0) {
        clearTimeout(myInterval);
        // div.classList.add("remove")
        // div.style.display ="none";
        div.style.opacity ="0";
    }
    if (counter < 10) {
        counter = `0${counter}`
        if (counter < 1) {
            counter = 0;
        }
    }
    document.getElementById("count").innerHTML = counter;
    
}, 1000)