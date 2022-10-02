// function for displaying time and automation of greeeting, 
//day/night mode, display of sun/moon pictures

function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours() - 10;
    var min = dateTime.getMinutes();
    var timing = document.getElementById('but-top');
    let img1 = document.getElementById('day');
    let img2 = document.getElementById('night');
    let img3 = document.getElementById('midDay');
    let img4 = document.getElementById('sunrise')


    if (hrs >= 12 && hrs <= 15){
        timing.innerHTML = "GOOD AFTERNOON, IT'S CURRENTLY";
        img3.style.visibility = 'visible';
        document.body.style.backgroundImage = "url('img/bright-forest.jpg')";
    }
    else if(hrs >= 16 && hrs <= 19){
        timing.innerHTML = "GOOD EVENING, IT'S CURRENTLY";
        img1.style.visibility = 'visible';
        document.body.style.backgroundImage = "url('img/forest-sunrise.jpg')";
    }
    else if(hrs >= 20 && hrs <= 23){
        timing.innerHTML = "GOOD EVENING, IT'S CURRENTLY";
        img2.style.visibility = 'visible';
        document.body.style.backgroundImage = "url('img/dark-forest.jpg')";
        document.body.style.backgroundColor = 'black';
    }
    else{
        timing.innerHTML = "GOOD MORNING, IT'S CURRENTLY";
        img4.style.visibility = 'visible';
        document.body.style.backgroundImage = "url('img/forest-sunrise.jpg')";
        
    }
    
    // The code below helps to output O for digits less than 10
    if (hrs <= 9 ){
        hrs ="0" + hrs;
    }
    if (min <= 9 ){
        min ="0" + min;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
}
setInterval(displayTime, 10);