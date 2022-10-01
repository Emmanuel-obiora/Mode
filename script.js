// function for displaying time and also greeting base on the clock time
function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours()  + 5; //this switches between Nigerian time and UK time
    var min = dateTime.getMinutes();
    var timing = document.getElementById('but-top');
    let img1 = document.getElementById('day');
    let img2 = document.getElementById('night');


    if (hrs >= 12 && hrs <= 15){
        timing.innerHTML = "GOOD AFTERNOON, IT'S CURRENTLY";
        img1.style.visibility = 'visible';
        document.body.style.backgroundImage = "url('img/bright-forest5.jpg')";
    }
    else if(hrs >= 16 && hrs <= 19){
        timing.innerHTML = "GOOD EVENING, IT'S CURRENTLY";
        img1.style.visibility = 'visible';
        document.body.style.backgroundImage = "url('img/bright-forest5.jpg')";
    }
    else if(hrs >= 20 && hrs <= 23){
        timing.innerHTML = "GOOD EVENING, IT'S CURRENTLY";
        img1.style.visibility = 'hidden';
        img2.style.visibility = 'visible';
        document.body.style.backgroundImage = "url('img/dark-forest1.jpg')";
    }
    else{
        timing.innerHTML = "GOOD MORNING, IT'S CURRENTLY";
        img1.style.visibility = 'visible';
        document.body.style.backgroundImage = "url('img/bright-forest5.jpg')";
        
    }

    // This line here correct the spill over time and returns it to accurate state
    if (hrs >= 24 && hrs <= 29){
        hrs = hrs - 24;
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