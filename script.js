const apiKey = "f629e614a38687abb449693b92616dca";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector('.weather-icons');


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);

    //create elements to display the weather info on the page
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

    if (data.weather[0].main == 'Clouds') {
        weatherIcon.src = "images/cloudy.png";
    }

    else if (data.weather[0].main == 'Rain') {
        weatherIcon.src = "images/rain.png";
    }

    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
    }

    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    }

    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
    }

}
searchBtn.addEventListener("click", () => {

    checkWeather(searchBox.value);

})



