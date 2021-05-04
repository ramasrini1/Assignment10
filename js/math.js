var number;
var decimalNum;
//STEP 1
number = prompt("Please enter a negative or positive", "-15");
console.log("The number entered is " + number + "\nThe positive value is " + Math.abs(number));

//STEP 2
number = prompt("Please enter a decimal number", "3.67");
console.log("The number entered is " + number + "\nRounded up to the nearest whole number " + Math.ceil(number));

//STEP 3
number = prompt("Please enter a decimal number", "3.67");
console.log("The number entered is " + number + "\nRounded down to the nearest whole number " + Math.floor(number));

//STEP 4
number = prompt("Please enter 5 numbers seperated by comma", "1,2,3,4,5");
console.log("The Numbers you entered are " + number)
var numberArray = number.split(',');
//console.log("number array is " + numberArray);
var maxNumber = Math.max.apply(Math, numberArray);
console.log("The max number is " + maxNumber);

var minNumber = Math.min.apply(Math, numberArray);
console.log("The min number is " + minNumber);

//STEP 5
number = prompt("Please enter a number", "25");
var root = Math.sqrt(number);
console.log("The number entered is " + number + " \nIt's square root is " + root);