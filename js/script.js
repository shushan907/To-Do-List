let count = 0;
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August",
                "September", "October", "November", "December"];

const dayInfo = document.querySelector('.dayInfo');

const URL = ["url('./image/morning.jpg')","url('./image/afternoon.jpg')", 
            "url('./image/evening.jpg')", "url('./image/night.jpg')"];

const setQS = (selector, value) => {
    document.querySelector(selector).innerText = value; 
};

//----------------input keyup ENTER-----------------------------------------

const enter = (event) => {
    if (event.key === 'Enter') {}/////();
};

const addZero = function(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
};

const changeBackground = function(hour) {
    if(hour > 5 && hour < 13) {
        dayInfo.style.backgroundImage = URL[0];
        dayInfo.style.color = '#BAAEE7';
    } else if (hour > 12 && hour < 19) {
        dayInfo.style.backgroundImage = URL[1];
        dayInfo.style.color = '#BAAEE7';
    } else if (hour > 18 && hour < 23) {
        dayInfo.style.backgroundImage = URL[2];
        dayInfo.style.color = '#FAD8B8';
    } else {
        dayInfo.style.backgroundImage = URL[3];
        dayInfo.style.color = '#FAD8B8';
    }
};

const getDay = function () {
    let day = new Date();
    setQS('.day', `${months[day.getMonth()]} ${day.getDate()}, ${days[day.getDay()]}`);
    setQS('.time', `${addZero(day.getHours())} : ${addZero(day.getMinutes())} : ${addZero(day.getSeconds())}`);
    changeBackground(day.getHours());
};

(function () {
    getDay();
    setInterval(() => { 
        getDay();
    }, 1000);
})();

document.querySelector('.fas').addEventListener('click', () => {
    document.querySelector('.input').style.display = 'inline';
    count++;
});

const addCircleAndDelete = function (x) {
    document.querySelector(`.circle${x}`).innerText = 'o';
    document.querySelector(`.delete${x}`).innerText = 'x';
}

for(let i = 1; i < 6; i++) {
    addCircleAndDelete(i);
}