//STEP 1
function sortString(str1){
    var str = str1.split("");
    // sorting
    str = str.sort();
    str = str.join("");
    return str;
}

function capitalizeFirstLetter(str1){
    var str = str1.split(" ");
    for (let i = 0; i<str.length; i++){
        //console.log("1 letter: " + str[i][0]);
        //console.log("other letters " + str[i].substr(1));
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    str = str.join(" ");
    return str;
}

function countVowels(str1){
    var str = str1.split(" ");
    var count = 0;
    str.map((word) => { 
        //console.log("word is " + word);
        for ( let i=0; i<word.length; i++){
            if ( word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u'){
                //console.log("each letter vowel" + word[i]);
                count++;
            }
        }
    });
    return count;
}

function makeId(length){
    var id = [];
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var len = characters.length;
    for (let i = 0; i<length; i++){
        id.push(characters.charAt(Math.floor(Math.random() * len)));
    }
    id =  id.join('');
    return id;
}

function Longest_Country_Name(countryArray) {
    //initialize a variable to store the longest word
    let longestWord = "";
    for(let index = 0; index < countryArray.length; index++){
      if(countryArray[index].length > longestWord.length){
           longestWord = countryArray[index];
       }
    }
   return longestWord
  }

var str = "webmaster"
console.log("Step 1\n" + "Input String: " + str);
console.log("Result: sorted string " + sortString(str));

//STEP 2
str = "the quick brown fox";
console.log("Step 2\n" + "Input String: " + str);
console.log("Result: Capitalized Senctence " + capitalizeFirstLetter(str));

//STEP 3
str = "the quick brown fox";
console.log("Step 3\n" + "Input String: " + str);
console.log("Result: Total number of vowels " + countVowels(str));

//STEP 4
var idLength = 8;
console.log("Step 4\n" + "Length of Id: " + idLength);
console.log("Result: Id generated is  " + makeId(idLength));

//STEP 5
countries = ["Australia", "Germany", "United States Of America", "Italy"];
console.log("Step 5\n" + "List of Country names: \n" + countries);
console.log("Result: Longest Country Name " + Longest_Country_Name(countries));