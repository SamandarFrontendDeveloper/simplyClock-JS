const sec = document.querySelector('.s');
const min = document.querySelector('.m');
const hour = document.querySelector('.h');
const numHours = document.querySelector('.hours');
const numMinutes = document.querySelector('.minutes');

let i = 360;

function clock() { 
    let time = new Date()
    let seconds = time.getSeconds() * 6;
    let minutes = time.getMinutes() * 6;
    let hours = time.getHours() * 30;
    
    if(seconds == 0 || i > 360){
        sec.style.transform = `rotate(${i}deg)`;
        i += 6;
    }else {
        sec.style.transform = `rotate(${seconds}deg)`;
    }
    
    sec.style.transition = `all 1s linear`;
    min.style.transform = `rotate(${minutes}deg)`;
    hour.style.transform = `rotate(${hours}deg)`;
    
    numHours.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
    numMinutes.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
    
    setTimeout(() => {
        clock()
    }, 1000);
}
clock();


const links = document.querySelectorAll('.tabsItem');
const tabs = document.querySelectorAll('.tabsContentItem');
console.dir(links);
console.dir(tabs);

for (let i = 0; i < links.length; i++) {
    const element = links[i];
    
    // element.onclick = function () {  
    //     console.log('Нажали');
    // }
    // element.onclick = function () {  
    //     console.log('Привет!');
    // }
    element.addEventListener('click', function (event) {  
        event.preventDefault()
        console.log(this);
        
        for (let x = 0; x < links.length; x++) {
            const elem = links[x];
            elem.classList.remove('active');
            tabs[x].classList.remove('active');
        }
        this.classList.add('active');
        tabs[i].classList.add('active');
    })
}


const btn = document.querySelector('.stopwatch__btn');
const stopwatchSeconds = document.querySelector('.stopwatch__seconds');
const stopwatchMinutes = document.querySelector('.stopwatch__minutes');
const stopwatchHours = document.querySelector('.stopwatch__hours');
const tabsLinkSpan = document.querySelector('.tabsLink__span');

btn.addEventListener('click', ()=> {
    
    if(btn.innerHTML == 'start'){
        btn.innerHTML = 'stop';
        tabsLinkSpan.classList.add('active');
        start()
    }else if(btn.innerHTML == 'stop') {
        btn.innerHTML = 'clear';
        tabsLinkSpan.classList.remove('active');
        tabsLinkSpan.classList.add('active_clear');
    }else if(btn.innerHTML == 'clear'){
        btn.innerHTML = 'start';
        tabsLinkSpan.classList.remove('active_clear');
        stopwatchSeconds.innerHTML = 0;
        stopwatchMinutes.innerHTML = 0;
        stopwatchHours.innerHTML = 0;
    }
    
})


function start() {  
    
    if(btn.innerHTML == 'stop'){
        setTimeout(() => {
            stopwatchSeconds.innerHTML++;
            
            start()
        }, 1000);
    }
    
    if(stopwatchSeconds.innerHTML > 59){
        stopwatchSeconds.innerHTML = 0;
        stopwatchMinutes.innerHTML++;
    }else if(stopwatchMinutes.innerHTML > 59){
        stopwatchMinutes.innerHTML = 0;
        stopwatchHours.innerHTML++;
    }
    
    
}