const button = document.getElementById("clickMe");
let zähler = 1;

button.addEventListener ('click', () =>{
    button.innerHTML = `Click me: ${zähler++}`
})