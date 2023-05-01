
function multiply(operator){
    let number = Number(document.querySelector("#number").value);
    diffnumber = number + operator;

    if (diffnumber > 27){
        diffnumber = diffnumber * 2
        console.log("multiplizier " + diffnumber);
    }
}
