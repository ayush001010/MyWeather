const apiKey = "56aceacb605cdae1dc97daded5d38443";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.getElementById("search");
const searchBtn = document.getElementsByClassName("search-icon");
const weatherIcon = document.querySelector(".main-img img");

async function CheckWeather(city) {
    const response = await fetch(apiURL + encodeURIComponent(city) + `&appid=${apiKey}`);
    var data = await response.json();

    if (response.ok) {
        console.log(data);

        document.querySelector(".main-city h2").innerHTML = data.name;
        document.querySelector(".main-temp h1").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".bottom-left p").innerHTML = data.main.humidity + "%";
        document.querySelector(".bottom-right p").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }
    } else {
        console.error("Error:", data.message);
        alert("City not found or API error.");
    }
}

// Example usage
searchBtn[0].addEventListener('click', () => {
    CheckWeather(searchBox.value);
});
