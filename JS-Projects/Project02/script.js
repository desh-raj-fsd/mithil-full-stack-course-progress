document.addEventListener('DOMContentLoaded',()=>{
    const cityInput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityNameDisplay = document.getElementById("city-name");
    const temperatureDisplay = document.getElementById("temperature");
    const descriptionDisplay = document.getElementById("description");
    const errorMessaage = document.getElementById("error-message");

    const API_KEY="9c2ef92c21043b41940697ebed4debe8"

    getWeatherBtn.addEventListener('click',async()=>{
        const city=cityInput.value.trim()
        if(!city) return
        
        try {
            const weatherData=await fetchWeatherData(city)
            displayWeatherData(weatherData)
        } catch (error) {
            showError()
        }

    })
    async function fetchWeatherData(city) {
      const city_url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`;
      const city_response = await fetch(city_url);

      if (!city_response.ok) {
        throw new Error("City Not found");
      }
      const city_data = await city_response.json();

      const values=city_data[0]
      const lon=values.lon
      const lat=values.lat
    //   console.log(lon);

      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
      const response= await fetch(url)

      if(!response.ok){
        throw new Error ("City not found")
      }
      const data=await response.json()

      return data;
    }

    function displayWeatherData(data) {
        console.log(data);
        
        const {name, main, weather} =data
        cityNameDisplay.textContent = name
        temperatureDisplay.textContent=`Temperature ${main.temp}`
        descriptionDisplay.textContent = `Weather ${weather[0].description}`;

        weatherInfo.classList.remove('hidden')
        errorMessaage.classList.add('hidden')
    }


    function showError() {
        weatherInfo.classList.remove('hidden')
        errorMessaage.classList.add('hidden')
    }


})