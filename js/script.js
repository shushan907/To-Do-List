let count = 1;
let countShow = 0;
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August",
                "September", "October", "November", "December"];

const dayInfo = document.querySelector('.dayInfo');

const URL = ["url('./image/morning.jpg')","url('./image/afternoon.jpg')", 
            "url('./image/evening.jpg')", "url('./image/night.jpg')"];

const setQS = (selector, value) => {
    document.querySelector(selector).innerText = value; 
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

const addToDoList = function () {
    const inputValue = document.querySelector('.input').value;
    if(inputValue) {
        document.querySelector(`.list${count}`).style.display = 'block';
        document.querySelector(`.text${count}`).innerText = inputValue;
        document.querySelector('.input').value = '';
        document.querySelector('.input').style.display = 'none';
        count++;
        countShow++;
    } else alert('You must write something!')
}

//----------------input keyup ENTER-----------------------------------------

const enter = (event) => {
    if (event.key === 'Enter') {
        addToDoList();
    }
};

const addCircleAndDelete = function (x) {
    document.querySelector(`.circle${x}`).innerText = 'o';
    document.querySelector(`.delete${x}`).innerText = 'x';
}

for(let i = 1; i < 6; i++) {
    addCircleAndDelete(i);
    document.querySelector(`.circle${i}`).addEventListener('click', () => {
        document.querySelector(`.circle${i}`).style.color = 'green';
        document.querySelector(`.circle${i}`).innerText = 'v';
        document.querySelector(`.text${i}`).style.textDecoration = 'line-through';
    });
    document.querySelector(`.delete${i}`).addEventListener('click', () => {
        document.querySelector(`.list${i}`).style.display = 'none';
        countShow--;
    })
}

document.querySelector('.fas').addEventListener('click', () => {
    document.querySelector('.input').style.display = 'inline';
});