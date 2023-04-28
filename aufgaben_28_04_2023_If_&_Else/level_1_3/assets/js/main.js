
function greaterThen() {
    event.preventDefault();
    
    const output = document.querySelector(".output");
    let age = Number(document.getElementById("input").value >= 18);

    if (age){
        console.log(true);
        output.innerHTML = "Ja, Du kannst Shisha rauchen";
    } else {
        console.log(false);
        output.innerHTML = "Du darfst noch nicht Shisha rauchen";
    }
  }