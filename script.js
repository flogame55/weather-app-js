const appKey = "ไปเอา API Key ของ OpenWeatherMap มาใส่ตรงนี้";

const searchButton = document.querySelector("#search-btn");
const searcInput = document.querySelector("#search-txt");
const cityName = document.querySelector("#city-name");
const icon = document.querySelector("#icon");
const temperature = document.querySelector("#temp");
const humidity = document.querySelector("#humidity-div");

searchButton.addEventListener("click", findWeatherDetails);
searcInput.addEventListener("keyup",enterPressed)

function enterPressed(event){
    if(event.key === "Enter"){
        findWeatherDetails();
    }
}

function findWeatherDetails(){

    if (appKey === "ไปเอา API Key ของ OpenWeatherMap มาใส่ตรงนี้") {
        alert("กรุณากำหนด OpenWeatherMap API Key ของคุณในไฟล์ script.js");
        return;
    }

    if(searcInput.value === ""){
        alert("Please enter a city name");
}else{
    const searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searcInput.value + "&appid=" + appKey;
    httpRequestAsync(searchLink , theRespone);
    }
}

function theRespone(respone) {
    const jsonObject = JSON.parse(respone);
    cityName.innerHTML = jsonObject.name;
    icon.src = "https://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
    temperature.innerHTML = parseInt(jsonObject.main.temp - 273) + "°C";
    humidity.innerHTML = jsonObject.main.humidity + "%";
}

function httpRequestAsync(url, callback){
    const httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
        if(httpRequest.readyState == 4 && httpRequest.status == 200){
            callback(httpRequest.responseText);
        }
    }
    httpRequest.open("GET",url,true);
    httpRequest.send();
}