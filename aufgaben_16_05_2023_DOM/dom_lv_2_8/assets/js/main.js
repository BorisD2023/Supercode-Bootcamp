const userinput = document.querySelector("#userinput");
const btn = document.querySelector("#enter");
const ul = document.querySelector("ul");

btn.addEventListener('click', (e) =>{
    e.preventDefault();
    
    let newLi = document.createElement("li");
    let text = document.createTextNode(userinput.value);
    
    ul.appendChild(newLi);
    newLi.appendChild(text);

})

// Bonusaufgabe 
document.addEventListener('keydown', (e) =>{
    if (e.which === 13) {
        let newLi = document.createElement("li");
        let text = document.createTextNode(userinput.value);
        ul.appendChild(newLi);
        newLi.appendChild(text);
    }
})