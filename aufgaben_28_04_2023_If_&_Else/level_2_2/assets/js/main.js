const body = document.querySelector("body");

function checkAirQuality(){

    event.preventDefault();
    const output = document.querySelector(".output");
    const aqi = document.querySelector(".aqi");
    let slider = document.querySelector("#slider").value;
    

    if (slider <= 50){
        aqi.innerHTML = "AQI: " + slider;
        output.innerHTML = "<p>Level of health concern: Good</p><p>Level of health concern: Little or no risk</p>";
        body.style.backgroundColor = "green";

    } else if (slider >= 50 && slider <= 100) {
        aqi.innerHTML = "AQI: " + slider;
        output.innerHTML = "<p>Level of health concern: Moderate</p><p>Level of health concern: Acceptable quality</p>";
        body.style.backgroundColor = "orange";

    } else if (slider >= 100 && slider <=150) {
        aqi.innerHTML = "AQI: " + slider;
        output.innerHTML = "<p>Level of health concern: Unhealthy for sensitive groups</p><p>Level of health concern: Generable publics not likely affected</p>";
        body.style.backgroundColor = "red";
    }

}

body.style.display = "flex";
body.style.flexDirection = "column";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.height = "100vh";
body.style.textAlign = "center"
