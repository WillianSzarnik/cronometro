var sec=0
var min=0
var hrs=0
var time

function start(params) {
    time= setInterval(watch,1000)
}

function pause(){
    clearInterval(time)

}

function stop() {

    sec=0
    min=0

    document.getElementById('segundos').innerText=sec
    document.getElementById('minutos').innerText=min
    document.getElementById('horas').innerText=hrs
}

function watch(){
sec++
if(sec==60){
    min++
    sec=0
}
if(min==60){
    hrs++
    min=0
}
document.getElementById('segundos').innerText=sec
document.getElementById('minutos').innerText=min
document.getElementById('horas').innerText=hrs
}