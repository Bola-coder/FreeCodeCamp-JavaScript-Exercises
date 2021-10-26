// You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
 const newArr2 = [...arr2]; // To avoid mutating arr2. Slice method can also be used as it doesn't mutate the array
   newArr2.splice(n, 0, ...arr1)
  return newArr2;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));