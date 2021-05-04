var name;
var number;
var quote;
//STEP 1
name = prompt("Step 1\nPlease enter your name", "Harry Potter");
alert("The length of your name is \n" + "Result: " + name.length);

//STEP 2
name = prompt("Step 2\nPlease enter your name", "Harry Potter");
number = Number(prompt("Please enter a number between zero and less than the length of the name", "2"));
if ( number <0 || number >= name.length) {
    alert("Result: Invalid index, No character matches that index");
} else {
    var pos = name.charAt(number);
    alert("The letter in your name at index " + number + " is \n" + "Result: " + pos);
}

//STEP 3
var firstName = prompt("Step 3\nPlease enter your first name", "Harry");
var lastName  = prompt("Please enter your last name", "Potter");
alert("The result of concatenating First and last name \n" + "Result: " +  firstName.concat(lastName));

//STEP 4
quote = "The quick brown fox jumps over the lazy dog";
alert("Step 4\nThe word fox in the quote '" + quote + "' begins at \n" + "Result: " + quote.indexOf('fox') );

//STEP 5
quote = "The quick brown fox jumps over the lazy fox";
alert("Step 5\nThe last occurance of fox in the quote '" + quote + "' is at \n" + "Result: " + quote.lastIndexOf('fox') );

//STEP 6
quote = "The quick brown fox jumps over the lazy dog";
name = prompt("Please enter your name", "Harry Potter");
var newName = quote.replace('lazy dog', name);
alert("Step 6\nThe new quote is  \n" + "Result: " +  newName);

//STEP 7
quote = "The quick brown fox jumps over the lazy dog";
name = prompt("Step 7\nEnter a word to be searched in the quote \n" + quote, "jumps");
number = quote.search(name);
if ( number == -1 ){
    alert("Result: This word " + name + " does not exists in the quote");
} else {
    alert("Position of the word " + name + " in the quote is \n" + "Result: " + number);
}

//STEP 8
quote = "The quick brown fox jumps over the lazy dog";
var new_string = quote.slice(31,44);
new_string = new_string.toUpperCase();
alert("Step 8\nThe sliced word stored in new_string is: \n" + "Result: " + new_string);

//STEP 9
var quote1 = "    THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG    ";
quote = quote1.trim();
quote = quote.toLowerCase();
alert("Step 9\nThe quote '" + quote1 +"'" + " trimmed and converted to lowercase is \n" + "Result: " + quote);

//STEP 10
quote = "the quick brown fox jumps over the lazy dog";
var newStr = quote.replace('t','T');
alert("Step 10\nThe first letter t is capitalized from the sentence \n" + "Result: " +  newStr);
        
