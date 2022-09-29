function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var timing = document.getElementById('but-top');

    if (hrs >= 0 && hrs <= 11){
        timing.innerHTML = "GOOD MORNING, IT'S CURRENTLY";
    }
    else if(hrs >= 12 && hrs <= 15){
        timing.innerHTML = "GOOD AFTERNOON, IT'S CURRENTLY";
    }
    else{
        timing.innerHTML = "GOOD EVENING, IT'S CURRENTLY";
    }

    // if(hrs > 12){
    //     hrs = hrs - 12;
    // }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
}
setInterval(displayTime, 10);



function myFunction() {
    var mode = document.getElementById('mode');
    var element = document.body;
    element.classList.toggle("dark-mode");
    if (mode.innerHTML == 'Dark mode'){
        mode.innerHTML = 'Light mode';

    }
    else {
        mode.innerHTML = 'Dark mode';
    }
  } 
