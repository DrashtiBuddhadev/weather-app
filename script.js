const apiKey="3a0e7fb6771257f330a3f1179ca1a054";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city){
    const response=await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    //to update the city name
    document.querySelector(".city").innerHTML=data.name;
    //to update the temperature
    //math.round() to give round up figure or only integer part of temp
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    //to update humidity
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    //to update windspeed
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src="images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src="images/clear.png";
    }
    else if(data.weather[0].main=="Snow"){
        weatherIcon.src="images/snow.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png";
    }
    else if(data.weather[0].main=="Smoke"){
        weatherIcon.src="images/mist.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png";
    }

}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
