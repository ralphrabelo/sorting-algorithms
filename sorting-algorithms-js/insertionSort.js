/**
 * The insertionSort function takes an array arr as input and sorts it in ascending order. 
 * It iterates through the array, starting from the second element (index 1), and for each element, 
 * it finds its correct position in the sorted portion of the array by comparing 
 * it with the elements in the sorted part and shifting larger elements to the right. 
 * Once the correct position is found, it inserts the current element into that position.
 * Insertion sort is not the most efficient sorting algorithm for large lists, but it performs well for small lists or nearly sorted arrays. 
 */

export function insertionSort(arr) {
    const n = arr.length;
  
    for (let i = 1; i < n; i++) {
      let currentElement = arr[i];
      let j = i - 1;
  
      // Move elements of arr[0..i-1] that are greater than the current element one position ahead of their current position
      while (j >= 0 && arr[j] > currentElement) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      arr[j + 1] = currentElement;
    }
  
    return arr;
  }
  /*
  // Example usage:
  const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
  const sortedArray = insertionSort(unsortedArray);
  console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]
  */