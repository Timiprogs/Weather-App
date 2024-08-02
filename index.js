const apiKey="10e01c714a2356af024b291a42a9726d"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")
const WeatherIcon=document.querySelector(".weather-symbol")
const ErrorMessage=  document.querySelector(".error")


async function checkWeather (city){
    const response = await fetch (apiUrl + city + `&appid=${apiKey}`);
    
    var data= await response.json()
    if (response.status==404) {
       ErrorMessage.style.display="block";
       document.querySelector(".weather").style.display="none"
    }
    else{

           if (data.weather[0].main=="Clouds"){
WeatherIcon.src= "images/clouds.png"

}
else if(data.weather[0].main=="Clear"){
    WeatherIcon.src="images/clear.png"
}
else if(data.weather[0].main=="Drizzle"){
    WeatherIcon.src="images/drizzle.png"
}
else if(data.weather[0].main=="Mist"){
    WeatherIcon.src="images/mist.png"
}

else if(data.weather[0].main=="Rain"){
    WeatherIcon.src="images/rain.png"
}

document.querySelector(".weather").style.display="block";
 ErrorMessage.style.display="none";
    }
    console.log(data)

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/hr";


 
}



searchBtn.addEventListener("click", ()=>{checkWeather(searchBox.value);}

)





                                                    
