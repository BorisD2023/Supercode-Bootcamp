const output = document.querySelector(".umwickeln");
const btn = document.querySelector("button");
let counter = 0;

btn.addEventListener('click', (e) =>{
    e.preventDefault();

    let create = document.createElement("div");
    create.textContent = counter;
    
    if (!(counter % 10)) {
        create.classList.add("weiss");
    }else{
        create.classList.add("rechteck");
    }
    counter++;
    output.appendChild(create);
})

