require("dotenv").config();
const fetch = require("node-fetch");

function getWeatherData(university) {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${university.address.city},${university.address.country}&appid=${process.env.OWM_API_KEY}&lang=de`).then(handleResponse)
}

async function handleResponse(response) {
    if (response.ok) return response.json();
    if (response.status === 400) {
        const error = await response.text();
        throw new Error(error);
    }
    console.log(response)
    throw new Error("Network response was not ok.");
}

module.exports = { getWeatherData }