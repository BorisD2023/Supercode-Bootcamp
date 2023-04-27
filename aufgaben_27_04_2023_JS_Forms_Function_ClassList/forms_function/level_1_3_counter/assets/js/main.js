let summary = 0;
let output = document.querySelector(".output");

// Left Site

function plus1(){
    summary += 1;
    output.innerHTML = summary;
}

function plus10(){
    summary += 10;
    output.innerHTML = summary;
}

function plus100(){
    summary += 100;
    output.innerHTML = summary;
}

function reset(){
    summary = 0;
    output.innerHTML = summary;
}

// Right Site

function minus1(){
    summary -= 1;
    output.innerHTML = summary;
}

function minus10(){
    summary -= 10;
    output.innerHTML = summary;
}

function minus100(){
    summary -= 100;
    output.innerHTML = summary;
}

function multiply2(){
    summary *= 2;
    output.innerHTML = summary;
}



// // Another way
// // onclick in der html nicht notwendig

// let output = document.querySelector(".output");
// let count = 0;
// let plus1 = document.querySelector(".plus1")
// let plus10 = document.querySelector(".plus10")
// let plus100 = document.querySelector(".plus100")
// let reset = document.querySelector(".reset")
// let minus1 = document.querySelector(".minus1")
// let minus10 = document.querySelector(".minus10")
// let minus100 = document.querySelector(".minus100")
// let multiply2 = document.querySelector(".multiply2")

// plus1.addEventListener("click", () => {
//     count++;
//     output.innerHTML = count;
// })

// plus10.addEventListener("click", () => {
//     count = count + 10;
//     output.innerHTML = count;
// })

// plus100.addEventListener("click", () => {
//     count = count + 100;
//     output.innerHTML = count;
// })

// reset.addEventListener("click", () => {
//     count = 0;
//     output.innerHTML = count;
// })

// minus1.addEventListener("click", () => {
//     count--;
//     output.innerHTML = count;
// })

// minus10.addEventListener("click", () => {
//     count = count - 10;
//     output.innerHTML = count;
// })

// minus100.addEventListener("click", () => {
//     count = count - 100;
//     output.innerHTML = count;
// })

// multiply2.addEventListener("click", () => {
//     count = count * 2;
//     output.innerHTML = count;
// })





