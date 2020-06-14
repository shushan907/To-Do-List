const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August",
                "September", "October", "November", "December"];

const setQS = (selector, value) => {
    document.querySelector(selector).innerText = value; 
};

const dayInfo = document.querySelector('.dayInfo');
const URL = ["url('../image/morning.jpg')","url('../image/afternoon.jpg')", "url('../image/evening.jpg')", "url('../image/night.jpg')"];
(function () {
    const day = new Date();
    function addZero(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
    }
    setQS('.day', `${months[day.getMonth()]} ${day.getDate()}, ${days[day.getDay()]}`);
    setQS('.time', `${addZero(day.getHours())} : ${addZero(day.getMinutes())} : ${addZero(day.getSeconds())}`);
    changeBackground(day.getHours());
})();

function changeBackground(hour) {
    if(hour > 5 && hour < 13) {
        dayInfo.style.backgroundImage = URL[0];
    } else if (hour > 12 && hour < 19) {
        dayInfo.style.backgroundImage = URL[1];
    } else if (hour > 18 && hour < 23) {
        dayInfo.style.backgroundImage = URL[2];
    } else {
        dayInfo.style.backgroundImage = URL[3];
    }
};