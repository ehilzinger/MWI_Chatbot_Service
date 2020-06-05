require("dotenv").config();

function getWeatherData(university) {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${university.address.city},${university.address.country}&appid=${process.env.OWM_API_KEY}`)
}

module.exports = { getWeatherData }