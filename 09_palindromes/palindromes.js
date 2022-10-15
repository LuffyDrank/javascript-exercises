const palindromes = function (string) {
    let reversedString = "";
    let containsSymbol = string.includes('!');
    console.log(containsSymbol);
    for(let i = string.length; i >= 0; i--){
        reversedString += string.charAt(i);
    }
    reversedString = reversedString.replace(/\s+/g, '');
    reversedString = reversedString.toLowerCase();
    string = string.replace(/\s+/, "");
    string = string.toLowerCase();
    console.log(string);
    console.log(reversedString);
    if(reversedString === string) {
        return true
    }
    else {
        return false
    }
};
palindromes("Racecar!")
// Do not edit below this line
module.exports = palindromes;
