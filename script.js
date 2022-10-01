// function for displaying time and also greeting base on the clock time
function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours()  + 5; //this switches between Nigerian time and UK time
    var min = dateTime.getMinutes();
    var timing = document.getElementById('but-top');

    if (hrs >= 12 && hrs <= 15){
        timing.innerHTML = "GOOD AFTERNOON, IT'S CURRENTLY";
    }
    else if(hrs >= 16 && hrs <= 23){
        timing.innerHTML = "GOOD EVENING, IT'S CURRENTLY";
    }
    else{
        timing.innerHTML = "GOOD MORNING, IT'S CURRENTLY";
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


// Function to toggle between light and dark mode
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

this.state = JSON.parse(window.localStorage.getItem('state')) || {
    items: []
  };


// this.addItem = this.addItem.bind(this);
// this.deleteItem = this.deleteItem.bind(this);
// }

// setState(state) {
// window.localStorage.setItem('state', JSON.stringify(state));
// super.setState(state);
// }