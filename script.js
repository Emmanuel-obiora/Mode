// function for displaying time and automation of greeeting, 
//day/night mode, display of sun/moon pictures

function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var timing = document.getElementById('but-top');
    let img1 = document.getElementById('day');
    let img2 = document.getElementById('night');
    let img3 = document.getElementById('midDay');
    let img4 = document.getElementById('sunrise');


    if (hrs >= 6 && hrs <= 11){
        document.body.style.backgroundImage = "url('img/sunrise-bg.jpg')";
        img4.style.visibility = 'visible';
    }
    else if(hrs >= 12 && hrs <= 15){
        document.body.style.backgroundImage = "url('img/bright-forest.jpg')";
        img3.style.visibility = 'visible';

        
    }
    else if(hrs >= 16 && hrs <= 19){
        document.body.style.backgroundImage = "url('img/sunset.jpg')";
        img1.style.visibility = 'visible';
    }
    else{
        document.body.style.backgroundImage = "url('img/darkForest.jpg')";
        document.body.style.backgroundColor = 'black';
        img2.style.visibility = 'visible';
    }
    
    // The code below helps to output O for digits less than 10
    if (hrs <= 9 ){
        hrs ="0" + hrs;
    }
    if (min <= 9 ){
        min ="0" + min;
    }


    let dayChange = (hrs >= 0 && hrs < 12)? timing.innerHTML = "GOOD MORNING, IT'S CURRENTLY":
    (hrs > 11 && hrs < 16)? timing.innerHTML = "GOOD AFTERNOON, IT'S CURRENTLY":
    (hrs > 15 && hrs < 20)? timing.innerHTML = "GOOD EVENING, IT'S CURRENTLY":
    timing.innerHTML = "GOOD EVENING, IT'S CURRENTLY";

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
}
setInterval(displayTime, 10);