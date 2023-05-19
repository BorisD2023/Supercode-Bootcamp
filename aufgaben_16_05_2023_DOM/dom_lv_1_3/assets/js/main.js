const btn = document.querySelectorAll("button")
const output = document.querySelector("output")
const ul = document.body.firstElementChild;

btn.forEach((button, index) => {
  
    button.addEventListener('click', (e) =>{
        e.preventDefault();
        
        if (index === 0) {
            liFirstElement = ul.firstElementChild.textContent;
            output.innerHTML = liFirstElement;
        }else if(index === 1){
            liLastElement = ul.lastElementChild.textContent;
            output.innerHTML = liLastElement;
        }else if(index === 2){
            liFirstSibling = ul.firstElementChild.nextElementSibling.textContent;
            output.innerHTML = liFirstSibling;
        }else{
            liLastSibling = ul.lastElementChild.previousElementSibling.textContent;
            output.innerHTML = liLastSibling;
        }
    })
});