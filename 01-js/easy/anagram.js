/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

// Words to match
var words = ["dell", "ledl", "abc", "cba"];

// The output object
var anagrams = {};

for (var i in words) {
    var word = words[i];

    // sort the word like you've already described
    var sorted = sortWord(word);

    // If the key already exists, we just push
    // the new word on the the array
    if (anagrams[sorted] != null) {
        anagrams[sorted].push(word);
    } 
    // Otherwise we create an array with the word
    // and insert it into the object
    else {
        anagrams[sorted] = [ word ];
    }
}

// Output result
for (var sorted in anagrams) {
    var words = anagrams[sorted];
    var sep = ",";
    var out = "";
    for (var n in words) {
        out += sep + words[n];
        sep = "";
    }
    document.writeln(sorted + ": " + out + "<br />");
}
}

module.exports = isAnagram;
