const changeMeBtn = document.getElementById("navChange");
const navHome = document.getElementById("navHome"); 


changeMeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    //!Home Style
    navHome.style.backgroundColor = "#f6c89f";
    navHome.style.color = "#666";
    //!News Style
    document.querySelector("#navNews").style.backgroundColor = "#ffe7d1";
    document.querySelector("#navNews").style.color = "#666";
    //!Contact Style
    document.querySelector("#navContact").style.backgroundColor = "#4b8e8d";
    document.querySelector("#navContact").style.color = "#666";
    //!Change me Style
    changeMeBtn.style.backgroundColor = "#396362";
    changeMeBtn.style.color = "#333";
});
