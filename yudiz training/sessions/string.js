/*
PROBLEM - 1
   An isogram is a word that has no duplicate letters.
   Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".

   NOTES : Ignore letter case (should not be case sensitive).
*/
function isIsogram(word) {
   // ... your code here.
   word = word.toLowerCase();
   for(let i = 0; i < word.length; i++){
       for(let j = i+1; j < word.length; j++){
           if(word[i] == word[j]){
               return false
           }
       }
   }
   return true;
}

console.log(isIsogram("Algorism"));      // true
console.log(isIsogram("PasSword"));      // false
console.log(isIsogram("Consecutive"));   // false

/*
PROBLEM - 2
    Parity bits are used as very simple checksum to ensure that binary 
    data isn't corrupted during transit. Here's how they work:

    If a binary string has an odd number of 1's, the parity bit is a 1.
    If a binary string has an even number of 1's, the parity bit is a 0.
    The parity bit is appended to the end of the binary string.

    Create a function 'validateBinary' that validates whether a binary string is valid, 
    using parity bits.

    Explanation:
        validateBinary("10110010") ➞ true

        The last digit is the parity bit.
        0 is the last digit.
        0 means that there should be an even number of 1's.
        There are four 1's.
        Return true.

*/

function validateBinary(bits){
    // ... your code here.
    count_1 = 0;
    for(let i = 0; i < bits.length; i++){
        if(bits[i] == "1"){
            count_1 += 1;
        }
    }
    if(count_1 % 2 != 0){
        return false;
    }else{
        return true;
    }
}
console.log(validateBinary("00101110")) // true
console.log(validateBinary("11000000")) // true
console.log(validateBinary("11000001")) // false

/*
PROBLEM - 3

    You will be given a string of characters containing only the following characters: 
    "(", ")", ":"
    Create a function that returns a number based on the number of sad and happy smiley 
    faces there is.
        * The happy faces :) and (: are worth 1.
        * The sad faces :( and ): are worth -1.
        * Invalid faces are worth 0.
    EXPLANATION :
            happinessNumber(":):(") ➞ -1
                The first 2 characters are :)        +1      Total: 1
                The next 2 are ):                    -1      Total: 0
                The last 2 are :(                    -1      Total: -1
*/

function happinessNumber(smilies) {
    // ... your code here.
    let count = 0;
    for(let i = 0; i < smilies.length-1; i++){
        let str = smilies.slice(i, i+2);
        if(str == ":)" || str == "(:"){
            count += 1;
        }
        else if(str == ":(" || str == "):"){
            count -= 1;
        }
    }
    return count
}   

console.log(happinessNumber(":):(")) // -1
console.log(happinessNumber("(:)"))  //  2
console.log(happinessNumber("::::")) //  0
