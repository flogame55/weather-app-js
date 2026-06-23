const searchButton = document.querySelector("#search-btn");
const searcInput = document.querySelector("#search-txt");
const cityName = document.querySelector("#city-name");
const icon = document.querySelector("#icon");
const temperature = document.querySelector("#temp");
const humidity = document.querySelector("#humidity-div");

// ระบบป้องกัน API หมด (Rate Limiting & Caching)
const CACHE_DURATION = 5 * 60 * 1000; // เก็บข้อมูลเดิมไว้ 5 นาที (ไม่ต้องดึง API ใหม่)
let lastSearchTime = 0;
const SEARCH_COOLDOWN = 2000; // หน่วงเวลาห้ามกดค้นหารัวๆ (2 วินาที)

searchButton.addEventListener("click", findWeatherDetails);
searcInput.addEventListener("keyup",enterPressed)

function enterPressed(event){
    if(event.key === "Enter"){
        findWeatherDetails();
    }
}

function findWeatherDetails() {
    const now = Date.now();
    // ป้องกันการกดค้นหารัวๆ
    if (now - lastSearchTime < SEARCH_COOLDOWN) {
        alert("กรุณารอสักครู่ก่อนค้นหาอีกครั้ง เพื่อป้องกันการดึงข้อมูลซ้ำซ้อนครับ");
        return;
    }

    if (typeof CONFIG === 'undefined' || CONFIG.WEATHER_API_KEY === "YOUR_OPENWEATHERMAP_API_KEY_HERE" || CONFIG.WEATHER_API_KEY === "ไปเอา API Key ของ OpenWeatherMap มาใส่ตรงนี้") {
        alert("กรุณากำหนด OpenWeatherMap API Key ของคุณในไฟล์ config.js");
        return;
    }

    if(searcInput.value === ""){
        alert("Please enter a city name");
    }else{
        lastSearchTime = now;
        fetchWeatherData(searcInput.value);
    }
}

function fetchWeatherData(query) {
    const queryKey = query.trim().toLowerCase();
    
    // 1. ตรวจสอบข้อมูลใน Cache ก่อน (ป้องกันการรีเฟรชหน้าเว็บรัวๆ)
    const cachedData = sessionStorage.getItem(`weather_${queryKey}`);
    if (cachedData) {
        const parsedCache = JSON.parse(cachedData);
        if (Date.now() - parsedCache.timestamp < CACHE_DURATION) {
            console.log("✅ โหลดข้อมูลจาก Cache (ประหยัดโควต้า API)");
            theRespone(parsedCache.data);
            return;
        }
    }

    // 2. ถ้าไม่มีใน Cache หรือข้อมูลเก่าเกินไป ให้ดึงใหม่จาก API
    console.log("☁️ ดึงข้อมูลใหม่จาก OpenWeatherMap API");
    const searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + encodeURIComponent(queryKey) + "&appid=" + CONFIG.WEATHER_API_KEY;
    
    httpRequestAsync(searchLink, (response) => {
        // บันทึกลง Cache
        sessionStorage.setItem(`weather_${queryKey}`, JSON.stringify({
            timestamp: Date.now(),
            data: response
        }));
        theRespone(response);
    });
}

function theRespone(respone) {
    const jsonObject = JSON.parse(respone);
    
    if (jsonObject.cod && jsonObject.cod !== 200 && jsonObject.cod !== "200") {
        alert("Error: " + jsonObject.message);
        return;
    }

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

// โหลดข้อมูลสภาพอากาศเริ่มต้นเป็น "ประเทศไทย" เมื่อเปิดหน้าเว็บ
window.addEventListener("load", () => {
    if (typeof CONFIG === 'undefined' || CONFIG.WEATHER_API_KEY === "YOUR_OPENWEATHERMAP_API_KEY_HERE" || CONFIG.WEATHER_API_KEY === "ไปเอา API Key ของ OpenWeatherMap มาใส่ตรงนี้") {
        return; 
    }
    fetchWeatherData("Thailand");
});