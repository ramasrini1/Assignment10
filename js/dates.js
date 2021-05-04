

var getDaysInMonth = function(month,year) {
    // Here January is 1 based
    //Day 0 is the last day in the previous month
    return new Date(year, month, 0).getDate();
    // Here January is 0 based
   // return new Date(year, month+1, 0).getDate();
};

var getMonthName = function(year, monthNumber) {
    d = new Date(year, monthNumber-1);
    var index = d.getMonth();
    //console.log("index is " + index);
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    return month[index];
}

//
var isWeekend =  function(day, month, year){
    var dt = new Date(year, month-1, day); 
    
    if(dt.getDay() == 6 || dt.getDay() == 0) {
        return true;
    } else {
        return false;
    }
}

//Display weekend message 
function displayMsg(value){
    if ( value === true){
        console.log("Result: It is a Weekend");
    } else {
        console.log("Result: It is a Weekday");
    }
}

function getYesterdayDay(){
    let today = new Date();
    let num = today.getDay();
    var i = num;
    if (num == 0){
        i = 6
    } else {
        i = i-1;
    }
    var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return dayOfWeek[i];

}

//STEP 1
console.log("Step 1");
console.log("Calling function getDaysInMonth(5, 2021) ");
console.log("Result: " + getDaysInMonth(5, 2021) + " days in the month");
console.log("Calling Function getDaysInMonth(2, 2021)");
console.log("Result: " + getDaysInMonth(2, 2021) + " days in the month");

//STEP 2
console.log("Step 2");
console.log("Calling Function getMonthName(2021, 5) " );
console.log("Result: The name of the month is " + getMonthName(2021, 5));

console.log("Calling Function getMonthName(2021, 4) )");
console.log("Result: The name of the month is " + getMonthName(2021, 4));

//STEP 3
console.log("Step 3");
console.log("Calling functions isWeekend(22, 5, 2021)");
var weekend = isWeekend(22, 5, 2021);
displayMsg(weekend);

console.log("Calling functions isWeekend(27, 4, 2021)");
weekend = isWeekend(27, 4, 2021);
displayMsg(weekend);

//STEP 4
console.log("Step 4");
var today  = new Date();
console.log("Today's date is " + today.toString());
console.log("Calling Function getYesterdayDay() " );
console.log("Result: " + getYesterdayDay());

//STEP 5
console.log("Step5");
var currentDay = new Date();
console.log("Today's date is " + currentDay.toString());
currentDay = new Date().toLocaleString('en-us', {  weekday: 'long' });
//console.log("Today day is " + currentDay );
//console.log("Today's date is " + currentDate.toString());
console.log("Result: First letter of the day is " + currentDay.charAt(0));





