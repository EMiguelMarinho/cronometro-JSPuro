let hours = document.querySelector('#hours')
let minutes = document.querySelector('#minutes')
let seconds = document.querySelector('#seconds')
let miliseconds = document.querySelector('#miliseconds')

const btnStart = document.querySelector('#start')
const btnStop = document.querySelector('#stop')
const btnReset = document.querySelector('#reset')

//////////////////////////////////////////////////////////////

const oneSecond = 1000;
const oneMinute = 60 * oneSecond;
const oneHour = 60 *oneMinute;

let onTime = false;

let startMilisecond;
let startSecond;
let startMinute;
let startHour;

function runTime (onTime) {
    if(onTime){
        startMilisecond = setInterval(() => {
            if(miliseconds.innerText > 98) miliseconds.innerText = '-1'
            let newmiliseconds = Number(miliseconds.innerText) + 1;
        
            if(newmiliseconds < 10) newmiliseconds = '0' + newmiliseconds
            miliseconds.innerText = newmiliseconds
        }, 10);
        startSecond = setInterval(() => {
            if(seconds.innerText > 58) seconds.innerText = '-1'
            let newSeconds = Number(seconds.innerText) + 1;
        
            if(newSeconds < 10) newSeconds = '0' + newSeconds
            seconds.innerText = newSeconds
        }, oneSecond);
        startMinute = setInterval(() => {
            if(minutes.innerText > 58) minutes.innerText = '-1'
            let newMinutes = Number(minutes.innerText) + 1;
        
            if(newMinutes < 10) newMinutes = '0' + newMinutes
            minutes.innerText = newMinutes
        }, 500);
        startHour = setInterval(() => {
            let newHours = Number(hours.innerText) + 1;
        
            if(newHours < 10) newHours = '0' + newHours
            hours.innerText = newHours
        }, 500);
    };
    if(!onTime){
        clearInterval(startSecond);
        clearInterval(startMinute);
        clearInterval(startHour);
        clearInterval(startMilisecond)
    }
};

const resetTime = () => {
    seconds.innerText = '00';
    minutes.innerText = '00';
    hours.innerText = '00';
    miliseconds.innerText = '00';
}

btnStart.addEventListener('click', function(){
    onTime = true;
    runTime(onTime);
    btnStart.innerText = 'Retomar'
})

btnStop.addEventListener('click', function(){
    onTime = false;
    runTime(onTime);    
})

btnReset.addEventListener('click', function(){
    onTime = false;
    runTime(onTime);
    resetTime()
    btnStart.innerText = 'Iniciar'
})
