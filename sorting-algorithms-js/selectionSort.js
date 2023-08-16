/**
 * The selectionSort function takes an array arr as input and sorts it in ascending order. 
 * It divides the array into two parts: the sorted part on the left (initially empty) and the unsorted part 
 * on the right (the entire array). In each iteration, it finds the minimum element from the unsorted part 
 * and swaps it with the first element of the unsorted part. This way, the sorted part grows from the left, 
 * and the unsorted part shrinks until the entire array becomes sorted.
 * Selection sort is not the most efficient sorting algorithm, but it has the advantage of performing a minimal number of swaps compared to other sorting algorithms like bubble sort. However, it still has a time complexity of O(n^2) in all cases, making it less suitable for large arrays. 
*/
export function selectionSort(arr) {
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
  
      // Find the index of the minimum element in the remaining unsorted part of the array
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      // Swap the minimum element with the first unsorted element
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
  
    return arr;
  }
/*
// Example usage:
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = selectionSort(unsortedArray);
console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]
*/