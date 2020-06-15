let count = 1;
let countShow = 0;
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August",
                "September", "October", "November", "December"];

const dayInfo = document.querySelector('.dayInfo');

const URL = ["url('./image/1.jpg')","url('./image/2.jpg')", 
            "url('./image/3.jpg')", "url('./image/4.jpg')"];

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
    } else if (hour > 12 && hour < 19) {
        dayInfo.style.backgroundImage = URL[1];
    } else if (hour > 18 && hour < 23) {
        dayInfo.style.backgroundImage = URL[2];
    } else {
        dayInfo.style.backgroundImage = URL[3];
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

const addDiv = function() {

    const div = document.createElement('div');
    div.classList.add(`list${count}`);
    document.querySelector('.list').appendChild(div);

    const circle = document.createElement('span');
    circle.classList.add(`circle${count}`);
    document.querySelector(`.list${count}`).appendChild(circle);

    const text = document.createElement('span');
    text.classList.add(`text${count}`);
    document.querySelector(`.list${count}`).appendChild(text);

    const del = document.createElement('span');
    del.classList.add(`delete${count}`, `delete`);
    document.querySelector(`.list${count}`).appendChild(del);
    
    circle.addEventListener('click', () => {
        circle.style.color = '#87C540';
        circle.innerText = 'v';
        text.style.textDecoration = 'line-through';
    });
    del.addEventListener('click', () => {
        div.style.display = 'none';
        countShow--;
        if(countShow == 0) document.querySelector('.empty').style.display = 'block';
    });
};

const addToDoList = function () {
    const inputValue = document.querySelector('.input').value;
    if(inputValue) {
        document.querySelector(`.text${count}`).innerText = inputValue;
        document.querySelector('.input').value = '';
        document.querySelector('.input').style.display = 'none';
        count++;
        countShow++;
    } else alert('You must write something!')
};

const addCircleAndDelete = function () {
    document.querySelector(`.circle${count}`).innerHTML = `<i style='font-size:20px' class='fas'>&#xf13a;</i>`;
    document.querySelector(`.delete${count}`).innerHTML = `<i style='font-size:20px' class='far edit'>&#xf044;
                                                        </i> <i style='font-size:24px' class='far del'>&#xf2ed;</i>`;
};

//----------------input keyup ENTER-----------------------------------------

const enter = (event) => {
    if (event.key === 'Enter') {
        document.querySelector('.empty').style.display = 'none';
        addDiv();
        addCircleAndDelete();
        addToDoList();
    }
};

document.querySelector('.fas').addEventListener('click', () => {
    document.querySelector('.input').style.display = 'inline';
});