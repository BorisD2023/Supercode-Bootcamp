
function getInputValue(){
    const output = document.querySelector(".output")

    let numb = document.querySelector(".number").value;
   
    console.log(numb * 2);

    output.innerHTML = numb * 2;
    
}