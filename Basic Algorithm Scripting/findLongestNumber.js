// A code to return the longest word in a string
function findLongestWordLength(str) {
 let longest = '';
 let splitedStr = str.split(" ")
  longest = splitedStr[0].length
  for(var i = 0; i < splitedStr.length; i++){
    if(splitedStr[i].length > longest){
      longest = splitedStr[i].length;
    }
  }
  return longest;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));