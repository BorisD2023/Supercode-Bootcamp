fetch("https://picsum.photos/v2/list")
.then((res) => res.json())
.then((data) => {
    console.log(data);

    const content = data;

    content.forEach(singleSection => {
        const img = singleSection.download_url;
        const author = singleSection.author;
        const id = singleSection.id;

        let figure = document.createElement("figure");

        let image = document.createElement("img");
        image.setAttribute("src", img)
        image.setAttribute("alt", id)
        figure.appendChild(image);

        let figCaption = document.createElement("figcaption");
        figCaption.textContent = author;
        figure.appendChild(figCaption);
        
        document.querySelector(".wrapper").appendChild(figure);
    });
})

.catch((error) =>{
    console.log("Fehler beim laden ", error);
})