/*** Object Constructors ***/
function Appointment(time, date, location,type) {
  this.type = type;
  this.date = date;
  this.time = time;
  this.location = location;
}
var appts = []
var appt_1 = new Appointment("8:00","March 6");
var appt_2= new Appointment("8:00","March 7");
var appt_3 = new Appointment("8:00","March 6");
// till March 12
var appts = [appt_1,appt_2,appt_3];
// update appts

//assign global variable for counting appointments
let currAppCount = 0;
document.getElementById("appointmentCount").innerHTML = currAppCount;


function createList(){
    var first_row = document.getElementById("first-row");


    let newItem = document.createElement("li");
    newItem.innerHTML = '8:00 - 8:05';
    first_row.appendChild(newItem);
    // for loop over appts
    let newItem2 = document.createElement("li");
    newItem2.innerHTML = '<button class="booked">TCS Hall</button>';
    first_row.appendChild(newItem2);

}

function displayCount(currAppCount) {
    // body...

    document.getElementById("appointmentCount").innerHTML = currAppCount;
}

//function to change color and register for calendar
function bookButtonr1c1() {
    document.getElementById("r1c1").className = "booked";
    confirm("Confirm your appointment: Tartan testing: Sunday, March 6, 2022 8:00 AM @TCS Hall (Tata Consultancy Services)")
    if (localStorage.getItem("currAppCount") != null)
    {
        local_storage_value = parseInt(localStorage.getItem("currAppCount"));
        currAppCount += 1+local_storage_value;
        displayCount(currAppCount);
        localStorage.setItem("currAppCount", currAppCount);
    }
    else
    {
        localStorage.setItem("currAppCount", currAppCount);
    }
    localStorage.setItem("appt1", "Tartan testing: Sunday, March 6, 2022 8:00 AM @TCS Hall (Tata Consultancy Services)")
}


function bookButtonr2c2() {
    document.getElementById("r2c2").className = "booked";
    confirm("Confirm your appointment: Tartan testing: Monday, March 7, 2022 8:05 AM @TCS Hall (Tata Consultancy Services)")
    currAppCount += 1;
    document.getElementById("appointmentCount").innerHTML = currAppCount;
}


function bookButtonr2c7() {
    document.getElementById("r2c7").className = "booked";
    confirm("Confirm your appointment: Tartan testing: Saturdat, March 12, 2022 8:05 AM @TCS Hall (Tata Consultancy Services)")
    currAppCount += 1;
    document.getElementById("appointmentCount").innerHTML = currAppCount;
}


function bookButtonr4c1() {
    document.getElementById("r4c1").className = "booked";
    confirm("Confirm your appointment: Tartan testing: Sunday, March 6, 2022 8:15 AM @TCS Hall (Tata Consultancy Services)")
    currAppCount += 1;
    document.getElementById("appointmentCount").innerHTML = currAppCount;
}

window.onload = function(){
    let local_storage_value = parseInt(localStorage.getItem("currAppCount"));
    displayCount(local_storage_value);

}






