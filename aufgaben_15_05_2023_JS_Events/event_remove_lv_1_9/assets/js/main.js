const colorChose = document.querySelector("#farbeAuswahlen");
const btn = document.querySelector("#button");

btn.addEventListener("click", () =>{
    event.preventDefault();
    colorChose.remove(colorChose.selectedIndex);
})

// document.querySelector("#button").addEventListener("click",(e) => {
//     e.preventDefault();
//     const selection = document.querySelector("#farbeAuswahlen").selectedIndex;
//     document.querySelector("#farbeAuswahlen").remove(selection);
    
// })