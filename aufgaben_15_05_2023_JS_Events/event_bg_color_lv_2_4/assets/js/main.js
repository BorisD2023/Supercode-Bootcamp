const button = document.querySelector("#button");

button.addEventListener('click', () =>{
    event.preventDefault();
    const colorChange = document.querySelector("#farbeAuswahlen").value;
    const body = document.querySelector("body");
    body.style.backgroundColor = `${colorChange.replace(" ","")}`;    
})
