/*** Object Constructors ***/
//function appointment(type, time, location) {
//  this.type = type;
//  this.time = time;
//  this.location = location;
//}

//assign global variable for counting appointments
let currAppCount = 0;
document.getElementById("appointmentCount").innerHTML = currAppCount;




//function to change color and register for calendar
function bookButtonr1c1() {
    document.getElementById("r1c1").className = "booked";
    confirm("Confirm your appointment: Tartan testing: Sunday, March 6, 2022 8:00 AM @TCS Hall (Tata Consultancy Services)")
    if (localStorage.getItem("currAppCount") != null)
    {
        currAppCount += 1;
        document.getElementById("appointmentCount").innerHTML = currAppCount;
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






