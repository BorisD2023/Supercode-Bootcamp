const numbOutput = document.querySelector(".output");
const keyOutput = document.querySelector(".key");
const keyCodeOutput = document.querySelector(".keyCode");
const codeOutput = document.querySelector(".code");

document.querySelector("html").addEventListener('keydown', () =>{
    numbOutput.innerHTML = event.which;
    keyCodeOutput.innerHTML = event.which;
    keyOutput.innerHTML = event.key;
    codeOutput.innerHTML = event.code;
})

