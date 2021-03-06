// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.


function titleCase(str) {
  let titleStr = str.toLowerCase().split(" "); // Converts to lowerCase and split into an array of words
  let result = titleStr.map(function(st){
    return st.replace(st.charAt(0), st.charAt(0).toUpperCase())
  }); //maps through each word and converts the first letter to uppercase
  return result.join(" "); //converts back to string and returns it
}

console.log(titleCase("I'm a little tea pot"));