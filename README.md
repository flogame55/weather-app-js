# 🌦️ Modern Weather App (Glassmorphism Style)

เว็บแอปพลิเคชันสำหรับเช็คสภาพอากาศที่ออกแบบด้วยแนวคิด **Glassmorphism** ให้ความรู้สึกโปร่งใส ทันสมัย และสะอาดตา โดยดึงข้อมูล Real-time จาก OpenWeatherMap API

## ✨ Features
* **Real-time Search**: ค้นหาสภาพอากาศได้ทุกเมืองทั่วโลก
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
    git clone [https://github.com/ช](https://github.com/ช)ื่อUserของคุณ/weather-app-js.git
    ```
2.  **รับ API Key:**
    ไปที่ [OpenWeatherMap](https://openweathermap.org/) เพื่อสมัครสมาชิกและคัดลอก API Key ของคุณ
3.  **ตั้งค่าในโค้ด:**
    เปิดไฟล์ `script.js` และแก้ไขบรรทัดแรก:
    ```javascript
    const appKey = "ใส่ API Key ของคุณที่นี่";
    ```
4.  **รันโปรเจค:**
    เปิดไฟล์ `index.html` บน Browser ของคุณได้เลย!

## 📸 Preview
*(คุณสามารถแคปภาพหน้าจอโปรเจคของคุณมาใส่ในโฟลเดอร์แล้วแก้ลิงก์ตรงนี้ได้)*
![Weather App Screenshot](https://via.placeholder.com/600x300?text=Weather+App+Preview)

---
**Developed by [Jirayu Promyoun]**
*Student at Chiang Mai University (CAMT)*
