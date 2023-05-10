
const textArea = document.querySelector("article").innerHTML;
const btn = document.getElementById("search-button");
btn.onclick = highlightMe;


function highlightMe(){
    let highlightContent = document.querySelector("article");
    highlightContent.innerHTML = textArea;
    let stringInput = document.querySelector("#search-input").value;
    let highlightString = '<span class="highlight">' + stringInput + '</span>';

    highlightContent.innerHTML =  highlightContent.innerHTML.replaceAll(stringInput, highlightString);
}




// const textArea = document.querySelector('article');
// const searchElement = document.getElementById("search-input");
// //set baseText global
// const text = textArea.innerHTML;

// searchElement.addEventListener("input", (event) => {
//     event.preventDefault();
//     //get value of input field
//     let search = searchElement.value;

//     //check if input isnt empty
//     if (search !== null && search !== "" && search !== undefined) {

//         //replace text parts with spans input value
//         let change = text.replaceAll(search, '<span class="textArea">' + search + "</span>");

//         //set new text
//         textArea.innerHTML = change;
//     } else {
//         // set normal baseText
//         textArea.innerHTML = text;
//     }
// });



// const textArea = document.querySelector("article");
// const output = document.querySelector(".output");


// function searchString(){
//     // die <span> Elemente und den output Text aus der vorherigen Suche entfernen, alles wieder zurücksetzen auf den ursprünglichen Zustand
//     textArea.innerHTML = textArea.innerHTML.replaceAll("<span>", " ");
//     output.innerHTML = " ";

//     // input Suchfeld auslesen
//     let search = document.querySelector("#search-input").value;
//     console.log(search);

//     // überprüfen, ob in dem Text des articles das Suchwort enthalten ist - als Variable speichern
//     let result = textArea.innerText.includes(search);
//     // gibt true oder false raus
//     console.log(result);

//     // wenn das Suchwort enthalten ist,..
//     if(result == true){
//         // Variable, die das Suchwort in <span> Element packt
//         let addSpan = "<span>" + search + "</span>";

//         // innerHTML im ursprünglichen Zustand
//         console.log(textArea.innerHTML);  

//         // alle search Ergebnisse ersetzen und in der Konsole überprüfen ob die Änderungen übernommen wurden
//         let replaced = textArea.innerHTML.replaceAll(search, addSpan);
//         console.log(replaced);

//         // das innerHTML überschreiben
//         textArea.innerHTML = textArea.innerHTML.replaceAll(search, addSpan);
        
//         // wenn das Suchwort nicht enthalten ist,..
//     } else {
//         output.innerHTML = "Keine Ergebnisse gefunden.";
//     }
// }



// function searchString(){
//     let searchString = document.querySelector("#search-input").value;
//     console.log(searchString);
//     let text = document.querySelector("article").innerText;
//     console.log(text);

//     text = text.replaceAll(searchString, "<span>" + searchString + "</span>");
//     console.log(text);
    
//     document.querySelector("article").innerHTML = text;

//     let highlighted = document.querySelector("span");

//     highlighted.forEach((span) => {
//         span.classList.add("highlight");
//       });
// }