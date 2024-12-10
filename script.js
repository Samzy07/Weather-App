
const apiKey = "b02da77ad89d4cfa3520f692354169c7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".input input")
const searchBtn = document.querySelector(".input button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    } 
    else {

    var data = await response.json()


    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/cloud.png"
    }
    else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rainny.png"
    }
    else if (data.weather[0].main == "Sun"){
        weatherIcon.src = "images/sun.png"
    }
    else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    }

    document.querySelector(".weather").style.display = "flex"
    document.querySelector(".error").style.display = "none"

}

searchBox.value = ""


}

searchBtn.addEventListener("click", ()=>{
        checkWeather(searchBox.value)

})

