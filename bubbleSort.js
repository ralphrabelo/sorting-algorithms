/**
 Bubble sort is a simple sorting algorithm that repeatedly steps through the list to be sorted, 
 compares adjacent elements, and swaps them if they are in the wrong order. 
 The pass through the list is repeated until the list is sorted. Here's a JavaScript implementation of bubble sort: 
 */
export function bubbleSort(arr) {
    const n = arr.length;
    let swapped;
  
    for (let i = 0; i < n - 1; i++) {
      swapped = false;
  
      for (let j = 0; j < n - i - 1; j++) {
        // Compare adjacent elements
        if (arr[j] > arr[j + 1]) {
          // Swap the elements if they are in the wrong order
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swapped = true;
        }
      }
  
      // If no two elements were swapped in the inner loop, the array is already sorted
      if (!swapped) {
        break;
      }
    }
  
    return arr;
  }
  /*
  // Example usage:
  const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
  const sortedArray = bubbleSort(unsortedArray);
  console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]
  */