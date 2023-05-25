
fetch("https://picsum.photos/v2/list")
// .then((res) => console.log(res))
.then((res) => res.json())
.then((data) => {
    console.log(data);
    console.log(data[0]);
    console.log(data[0].author);
})

.catch((error) =>{
    console.log("Fehler beim laden ", error);
})