window.onclick = function(){
    let months =['January','February','March','April','May','June','July','August','September','October','November','December'];
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let dayName = days[new Date().getDay()];
    let monthName = months[new Date().getMonth()];
    let date = new Date().getDate();
    let year = new Date().getFullYear();
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let currentTimeAndDate =`
    ${dayName},${date} ${monthName} ${year},${hours}:${minutes}:${seconds}`;
    let standard = new Date().toString();
    document.getElementById('currentDateTime').innerText = standard;
    document.getElementById('currentDateTime2').innerText = standard;
    document.getElementById('currentDateTime3').innerText = standard;
}
