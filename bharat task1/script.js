function getWeather() {
    const apiKey = 'c75392d912a9b9c1fdcaf7fa125c74f2'; // Replace with your OpenWeatherMap API key
    const cityInput = document.getElementById('cityInput').value;

    if (cityInput === '') {
        alert('Please enter a city');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    
    if (data.cod === '404') {
        weatherInfo.innerHTML = 'City not found';
    } else {
        const cityName = data.name;
        const temperature = data.main.temp;
        const description = data.weather[0].description;

        weatherInfo.innerHTML = `${cityName}: ${temperature}°C, ${description}`;
    }
}
