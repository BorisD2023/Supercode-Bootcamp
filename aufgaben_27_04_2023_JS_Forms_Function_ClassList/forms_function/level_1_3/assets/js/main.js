
function getInputValue(){

    const output = document.querySelector(".output");
    
    let age1 = document.querySelector(".age1").value;
    let age2 = document.querySelector(".age2").value;

    output.innerHTML = age1 - age2
}



