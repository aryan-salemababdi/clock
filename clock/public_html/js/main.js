/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let day = date.getDay();
    let session = "AM";
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let days = date.getDate();
    let Nowruz = 44;
    if (hours === 0) {
        hours = 12;
    } else if (hours > 12) {
        hours = hours - 12;
        session = "PM";
    }
    ;
    hours = (hours < 10) ? `0${hours}` : hours;
    min = (min < 10) ? `0${min}` : min;
    sec = (sec < 10) ? `0${sec}` : sec;
    const time = `${hours}:${min}:${sec} ${session}`;
    document.querySelector(".clock").innerText = time;
    if (day === 0) {
        document.querySelector(".nameDay").innerText = "sunday";
    } else if (day === 1) {
        document.querySelector(".nameDay").innerText = "monday";
    } else if (day === 2) {
        document.querySelector(".nameDay").innerText = "tuesday";
    } else if (day === 3) {
        document.querySelector(".nameDay").innerText = "Wendsday";
    } else if (day === 4) {
        document.querySelector(".nameDay").innerText = "Thursday";
    } else if (day === 5) {
        document.querySelector(".nameDay").innerText = "Friday";
    } else if (day === 6) {
        document.querySelector(".nameDay").innerText = "saturday";
    }
    month = (month < 10) ? `0${month}` : month;
    days = (days < 10) ? `0${days}` : days;
    const  calendar = `${days}/${month}/${year}`;
    document.querySelector(".date").innerText = calendar;
}
;
setInterval(showTime, 1000);

