const API_KEY = "1aa3b3a2a30479c44d2b14e77bed9a07";
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather?APPID=" + API_KEY + "&units=metric&lang=fr&q=";

function getWeatherData(city, callback) {
    const url = BASE_URL + city;

    fetch(url)
        .then((res) => res.json())
        .then((weatherData) => callback(null, weatherData))
        .catch((error) => callback(error, null));
}

// Callback to display description, temperature, and humidity for Sousse
getWeatherData("Sousse", (error, data) => {
    if (error) {
        console.error("Error:", error);
        return;
    }
    console.log("City:", data.name);
    console.log("Description:", data.weather[0].description);
    console.log("Temperature:", data.main.temp);
    console.log("Humidity:", data.main.humidity);
});
