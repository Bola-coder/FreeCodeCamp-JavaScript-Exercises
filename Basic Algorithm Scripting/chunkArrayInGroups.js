function chunkArrayInGroups(arr, size) {
  // Check for the length of the array
  const arrLength = arr.length;
  const newArr = [];
  for(let i = 0; i < arrLength; i += size){
    newArr.push(arr.slice(i, i + size ))
  }
  console.log(newArr)
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d", "e" ], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)