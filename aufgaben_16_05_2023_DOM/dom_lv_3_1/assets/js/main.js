const output = document.getElementById("demo");
let counter = 1;

function changeBackground(color){
    document.querySelector("body").style.backgroundColor = color;
    output.innerHTML = `Wir haben die Farbe ${counter} mal geändert!`
    counter++;
}

function changeHandle(){
    counter++;
    const red = document.getElementById("rot").value;
    const green = document.getElementById("grun").value;
    const blue = document.getElementById("blau").value;
    document.querySelector("body").style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    
    let hex1 = Number(red).toString(16);
    let hex2 = Number(green).toString(16);
    let hex3 = Number(blue).toString(16);
    output.innerHTML = `rgb(${red}, ${green}, ${blue}) = #${hex1}${hex2}${hex3}`
}

