function reverseArray(arr) {
    // Use the reverse() method to reverse the elements of the array
    arr.reverse();
    return arr;
  }
  
  const originalArray = [1, 2, 3, 4, 5];
  const reversedArray = reverseArray(originalArray);
  
  console.log("Original Array:", originalArray);
  console.log("Reversed Array:", reversedArray);

