class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.main = document.getElementById("w-main");
    this.icon = document.getElementById("w-icon");
    this.temp = document.getElementById("w-temp");
    this.temp_min = document.getElementById("w-temp_min");
    this.temp_max = document.getElementById("w-temp_max");
    this.pressure = document.getElementById("w-pressure");
    this.humidity = document.getElementById("w-humidity");
    this.wind_speed = document.getElementById("w-wind_speed");
    this.lon = document.getElementById("w-lon");
    this.lat = document.getElementById("w-lat");
    this.stateInput = document.getElementById("state");
    this.cityInput = document.getElementById("city");
    this.changeLocationBtn = document.getElementById("w-change-btn");

    this.changeLocationBtn.addEventListener(
      "click",
      this.changeLocation.bind(this)
    );
  }

  async changeLocation() {

    const state = this.stateInput.value.trim()
    const city = this.cityInput.value.trim()



    if (city === "" || state === ""  ) {
      alert("Please Fill Both Inputs!")
      return;
    }



    weather.changeLocation(city, state)


    
    try {
      const result = await weather.getWeather()
      this.paint(result, weather.location)
    } catch (err) {
      console.error(err);
      alert("Failed to fetch weather data. Please try again later.")
    }
  }

  paint(weather, location) {
    this.location.textContent = `Location: ${location}`
    this.main.textContent = weather.weather[0].main
    this.icon.setAttribute(
        "src",`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    )
    this.temp.textContent = `Temperature: ${weather.main.temp}`
    this.temp_min.textContent = `Min Temperature: ${weather.main.temp_min}`
    this.temp_max.textContent = `Max Temperature: ${weather.main.temp_max}`
    this.pressure.textContent = `Pressure: ${weather.main.pressure}`
    this.humidity.textContent = `Humidity: ${weather.main.humidity}`
    this.wind_speed.textContent = `Wind Speed: ${weather.wind.speed}`
    this.lon.textContent = `Longitude: ${weather.coord.lon}`
    this.lat.textContent = `Latitude: ${weather.coord.lat}`
}


  // mainWeather(mainWeather) {
  //   switch (mainWeather) {
  //     case "Thunderstorm":
  //       return "رعد و برق"
  //     case "Drizzle":
  //       return "نمنم باران"
  //     case "Rain":
  //       return "بارانی"
  //     case "Snow":
  //       return "برفی"
  //     case "Mist":
  //       return "غبار"
  //     case "Smoke":
  //       return "دود"
  //     case "Haze":
  //       return "غبار مه"
  //     case "Dust":
  //       return "گرد و خاک"
  //     case "Fog":
  //       return "مه"
  //     case "Sand":
  //       return "شن"
  //     case "Ash":
  //       return "خاکستر آتشفشانی"
  //     case "Squall":
  //       return "بوران"
  //     case "Tornado":
  //       return "توقان"
  //     case "Clear":
  //       return "صاف"
  //     case "Clouds":
  //       return "ابری"
  //     default:
  //       return mainWeather
  //   }
  // }
}

