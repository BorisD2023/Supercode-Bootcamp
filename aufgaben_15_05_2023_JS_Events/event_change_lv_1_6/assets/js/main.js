const select = document.querySelector("#my-select");
const output = document.querySelector(".output");


select.addEventListener('change', () =>{
    output.innerHTML = `Sie haben ausgewählt: ${select.value}`;
})