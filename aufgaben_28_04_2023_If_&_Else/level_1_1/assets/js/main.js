
function checkAge(){
    const output = document.querySelector(".output");
    let age = document.querySelector(".age").value;

    if (age >= 18){
        output.innerHTML = "Volljährig";
        console.log("true");
    }   else {
        output.innerHTML = "Minderjährig"
        console.log("false");
    }
}