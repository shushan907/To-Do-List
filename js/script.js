//---------------------Variabels-----------------------------------------
let count = 1;
let countShow = 0;
let changeText;

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

const ready = function(circle, text) {
    circle.addEventListener('click', function() {
        circle.style.color = '#87C540';
        text.style.textDecoration = 'line-through';
    });
};

const changeToDo = function(edit, text) {
    edit.addEventListener('click', function() {
        document.querySelector('.inputEdit').style.display = 'block';
        document.querySelector('.inputEdit').value = text.innerText;

        changeText = function() {
            text.innerText = document.querySelector('.inputEdit').value;
            document.querySelector('.inputEdit').style.display = 'none';
        };
    });
};

const remove = function (del, div) {
    del.addEventListener('click', function() {
        div.remove();
        countShow--;
        if(countShow == 0) document.querySelector('.empty').style.display = 'block';
    });
};

const search = function() {
    const inputSearchValue = document.querySelector('.inputSearch').value;
 
    if (inputSearchValue) {
        const lists = document.querySelectorAll('.list div span:nth-child(2)')
        for (let i = 0; i < lists.length; i++) {
            if (!lists[i].innerText.includes(inputSearchValue)) {
                lists[i].parentElement.style.display = 'none';
            }
        }
    }
    document.querySelector('.inputSearch').style.display = 'none';
};

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

    const edit = document.createElement('span');
    edit.classList.add(`edit${count}`, `edit`);
    document.querySelector(`.list${count}`).appendChild(edit);

    const del = document.createElement('span');
    del.classList.add(`delete${count}`, `delete`);
    document.querySelector(`.list${count}`).appendChild(del);
    
    ready(circle, text);
    changeToDo (edit, text);
    remove(del, div);

};

const addCircleAndDelete = function() {
    document.querySelector(`.circle${count}`).innerHTML = `<i style='font-size:20px' class='fas'>&#xf13a;</i>`;
    document.querySelector(`.edit${count}`).innerHTML = `<label for='labEdit'><i style='font-size:20px' class='far edit'>&#xf044;</i></label>`;
    document.querySelector(`.delete${count}`).innerHTML = `<i style='font-size:24px' class='far del'>&#xf2ed;</i>`;
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

const showAllDivInList = function() {
    const listDiv = document.querySelectorAll('.list div');
    for (let i = 0; i < listDiv.length; i++) {
        listDiv[i].style.display = 'block'
    }
};

const hide = function() {
    document.querySelector('.list').style.display = 'none';
};

const showHide = function() {
    document.querySelector('.list').style.display = 'block';
};

//----------------input keyup ENTER-----------------------------------------

const enter = (event) => {
    if (event.key === 'Enter') {
        if(document.querySelector('.input').value != '') {
            document.querySelector('.empty').style.display = 'none';
            addDiv();
            addCircleAndDelete();
        }
        addToDoList();
    }
};

const enterEdit = (event) => {
    if (event.key === 'Enter') {
        changeText();
    }
};

const enterSearch = (event) => {
    if (event.key === 'Enter') {
        search();
    } 
};

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

document.querySelector('.addfas').addEventListener('click', () => {
    document.querySelector('.input').style.display = 'inline';
    showAllDivInList();
});

document.querySelector('.searchfas').addEventListener('click', () => {
    document.querySelector('.inputSearch').style.display = 'inline';
    showAllDivInList();
});

document.querySelector('.log').addEventListener('click', () => {
    document.querySelector('#registerForm').style.display = 'none';
    document.querySelector('#loginForm').style.display = 'block';
});

document.querySelector('.reg').addEventListener('click', () => {
    document.querySelector('#registerForm').style.display = 'block';
    document.querySelector('#loginForm').style.display = 'none';
});

document.querySelector('.login').addEventListener('click', () => {
    document.querySelector('.loginRegister').style.display = 'block'
});