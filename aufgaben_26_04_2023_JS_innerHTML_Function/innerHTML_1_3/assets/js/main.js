// Aufgabe 1

// document.getElementById("gallery").innerHTML = "<figure>Fig.1</figure>" + "<figure>Fig.2</figure>" + "<figure>Fig.3</figure>";

const galleryId = document.getElementById("gallery");

galleryId.innerHTML = "<figure><img src='./assets/img/baum.jpg' style=max-width:38vw><figcaption>Fig.1</figcaption></figure>";

galleryId.innerHTML += "<figure><img src=https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 style=max-width:32vw><figcaption>Fig.2</figcaption></figure>";

galleryId.innerHTML += "<figure><img src=https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 style=max-width:32vw><figcaption>Fig.3</figcaption></figure>";


galleryId.style.display = "flex";