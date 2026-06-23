# 🌦️ Modern Weather App (Glassmorphism Style)

เว็บแอปพลิเคชันสำหรับเช็คสภาพอากาศที่ออกแบบด้วยแนวคิด **Glassmorphism** ให้ความรู้สึกโปร่งใส ทันสมัย และสะอาดตา โดยดึงข้อมูล Real-time จาก OpenWeatherMap API

## ✨ Features
* **Real-time Search**: ค้นหาสภาพอากาศได้ทุกเมืองทั่วโลก
* **Auto Default Location**: แสดงสภาพอากาศของ "ประเทศไทย" ทันทีที่เปิดเว็บ โดยไม่ต้องกดค้นหา
* **API Protection (Rate Limiting & Caching)**: มีระบบป้องกันสแปมการค้นหาและจดจำข้อมูลชั่วคราว (Cache) 5 นาที เพื่อประหยัดโควต้า API
* **Modern UI**: ดีไซน์แบบโปร่งแสง (Glassmorphism) พร้อมพื้นหลัง Gradient สวยงาม
* **Responsive Layout**: ใช้ CSS Grid ในการจัดการโครงสร้างให้สมดุล
* **Interactive**: รองรับการกดปุ่ม `Enter` เพื่อความสะดวกรวดเร็วในการค้นหา
* **Unit Conversion**: คำนวณอุณหภูมิจาก Kelvin เป็น Celsius ให้โดยอัตโนมัติ ($T_{°C} = T_{K} - 273$)

## 🛠️ Tech Stack
* **HTML5**: โครงสร้างเว็บพื้นฐาน
* **CSS3**: เน้นการใช้ CSS Grid และ Backdrop-filter สำหรับดีไซน์
* **JavaScript (Vanilla JS)**: ใช้ XMLHttpRequest ในการดึงข้อมูล API และจัดการ DOM
* **API**: [OpenWeatherMap API](https://openweathermap.org/api)

## 🚀 การติดตั้งและใช้งาน (Getting Started)
เนื่องจากโปรเจคนี้มีการเก็บรักษาความปลอดภัยของ API Key ผู้ใช้งานจำเป็นต้องระบุ Key ของตนเองก่อนเริ่มใช้งาน:

1.  **Clone โปรเจค:**
    ```bash
    git clone https://github.com/flogame55/weather-app-js.git
    ```
2.  **รับ API Key:**
    ไปที่ [OpenWeatherMap](https://openweathermap.org/) เพื่อสมัครสมาชิกและคัดลอก API Key ของคุณ
3.  **ตั้งค่า API Key (สำหรับการรันในเครื่อง):**
    เข้าไปที่โฟลเดอร์ `public/` คัดลอกไฟล์ `config.example.js` และตั้งชื่อใหม่เป็น `config.js` จากนั้นใส่ API Key ของคุณ:
    ```javascript
    const CONFIG = {
        WEATHER_API_KEY: "ใส่ API Key ของคุณตรงนี้"
    };
    ```
4.  **ทดสอบรันในเครื่อง (Local):**
    เพียงแค่เปิดไฟล์ `public/index.html` บน Browser ของคุณ หรือใช้ Live Server ก็สามารถใช้งานได้ทันที 


## 📸 Preview
![image alt](https://github.com/flogame55/weather-app-js/blob/6d9d1c0249c984a4f18cedfa048c2f094cb73098/Screenshot%202026-04-08%20213810.png)

---
**Developed by [Jirayu Promyoun]**
*Student at Chiang Mai University (CAMT)*
