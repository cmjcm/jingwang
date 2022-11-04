// 侧边栏
var lili = document.querySelector('.list').querySelectorAll('li');
var divs = document.querySelectorAll('.all-right');
var showB = document.querySelector('.showB');
var nav = document.querySelector('.shuffling-left');
for (i = 0; i < lili.length; i++) {
    lili[i].setAttribute('index', i);
    lili[i].onmouseover = function () {
        var indexs = this.getAttribute('index');
        for (j = 0; j < divs.length; j++) {
            divs[j].style.display = 'none';
            showB.style.display = 'none';
        }
        divs[indexs].style.display = 'block';

    }
    nav.onmouseleave = function () {
        for (j = 0; j < divs.length; j++) {
            divs[j].style.display = 'none';
        }
        showB.style.display = 'block';

    }
}

// 轮播图
var index = 1;
var spans = document.querySelector('.num').querySelectorAll('span');
console.log(spans);
function lunbo() {
    index++;
    if (index > 5) {
        index = 1;
    }
    var imgs = document.querySelector('.img')
    imgs.src = "./images/lb-0" + index + ".jpg";
    for (i = 0; i < spans.length; i++) {
        spans[i].style.backgroundColor = 'black';
        spans[i].style.color = 'white'
    }
    spans[index - 1].style.backgroundColor = 'white'
    spans[index - 1].style.color = 'black'
}
var timer = setInterval(lunbo, 3000);

//城市空气质量模块
var on = document.querySelector('tbody').querySelectorAll('tr');
for (i = 0; i < on.length; i++) {
    on[i].onmouseover = function () {
        this.className = 'bg';
    }
    on[i].onmouseout = function () {
        this.className = '';
    }
}

//倒计时模块
let hour = document.querySelector('.hour');
let minute = document.querySelector('.minutes');
let second = document.querySelector('.second')
let b = +new Date('2022-8-8 18:00:00');
countDown();
setInterval(countDown, 1000)
function countDown() {
    let a = +new Date();
    let times = (b - a) / 1000;
    var h = parseInt(times / 60 / 60 % 24);
    h = h >= 10 ? h : '0' + h;
    hour.innerHTML = h;
    var m = parseInt(times / 60 % 60);
    m = m >= 10 ? m : '0' + m;
    minute.innerHTML = m;
    var s = parseInt(times % 60);
    s = s >= 10 ? s : '0' + s;
    second.innerHTML = s;
}
// 侧边栏模块
var btn = document.querySelector('#btn');
var box = document.querySelector('.box');
btn.onclick = function () {
    box.style.display = 'none';
}