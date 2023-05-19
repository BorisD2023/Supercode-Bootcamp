const elementColorChange = document.getElementsByClassName("example");
let changeColor = false;


function myFunction() {
   
    if (changeColor === false) {
        changeColor = true;
        for (let i = 0; i < elementColorChange.length; i++) {
            elementColorChange[i].style.backgroundColor = "black";
            elementColorChange[i].style.color = "white"
        }
        
    }else{
        for (let i = 0; i < elementColorChange.length; i++) {
            elementColorChange[i].style.backgroundColor = "#666";
            elementColorChange[i].style.color = "white"
            elementColorChange[4].style.backgroundColor = "lightgrey"
            elementColorChange[4].style.color = "black"
        }
    }
}