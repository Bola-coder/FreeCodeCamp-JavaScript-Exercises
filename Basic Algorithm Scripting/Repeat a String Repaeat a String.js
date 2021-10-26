// Repeat a given string str (first argument) for num times (second argument).
// Return an empty string if num is not a positive number.
// For the purpose of this challenge, do not use the built-in .repeat() method.




function repeatStringNumTimes(str, num) {
  let arr = []; // An array to store the string num number of times
  var str2 = "" // To store The final string

  // Pushing the string into an array "num" numbers of time
  for(let i=0; i < num; i++){
    arr.push(str);
  }

  // Looping through the each element in the array and passing it to the str2 variable
  for(let j of arr){
    str2 += j;
  }
  return str2;
}


console.log(repeatStringNumTimes("abc", 3));