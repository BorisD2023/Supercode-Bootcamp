
function weather(){
    const output = document.querySelector(".output");
    let number = Number(document.querySelector("#number").value);

    if (number >= 8 && number <= 10){
        output.innerHTML = "super";
        console.log("super");
    }  else if (number >= 6 && number <= 7) {
        output.innerHTML = "gut";
        console.log("gut");
    }  else if (number >= 3 && number <= 5) {
        output.innerHTML = "okay";
        console.log("okay");
    } else if (number >= 0 && number <= 2) {
        output.innerHTML = "schlecht";
        console.log("schlecht");
    }

}













// function checkAge(){
//     const output = document.querySelector(".output");
//     let age = document.querySelector(".age").value;

//     if (age >= 18){
//         output.innerHTML = "Volljährig";
//         console.log("true");
//     }   else {
//         output.innerHTML = "Minderjährig"
//         console.log("false");
//     }
// }