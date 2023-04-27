function changeBackground(){
    let red = document.querySelector("#red").value;
    let green = document.querySelector("#green").value;
    let blue = document.querySelector("#blue").value;
    let color = "rgb(" + red + "," + green + "," + blue + ")";
    console.log(red, green, blue);
    document.querySelector("body").style.background = color;

    // document.querySelector("body").style.background = "rgb(" + document.querySelector("#red").value + "," + document.querySelector("#green").value + "," + document.querySelector("#blue").value + ")";
}