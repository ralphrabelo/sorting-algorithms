/**
 * Quick sort is a popular sorting algorithm that follows the divide-and-conquer approach. 
 * It selects a pivot element from the array and partitions the other elements into two sub-arrays according 
 * to whether they are less than or greater than the pivot. 
 * It then recursively sorts the sub-arrays. 
 * The quickSort function takes an array arr as input and sorts it in ascending order. It recursively breaks down the array into smaller sub-arrays by choosing a pivot element and creating left and right sub-arrays based on whether the elements are less than or greater than the pivot. The recursion continues until the sub-arrays have only one or no elements, which are considered already sorted.
 * Quick sort has an average-case time complexity of O(n log n) and is widely used in practice due to its efficiency. 
 * However, its worst-case time complexity is O(n^2) when the pivot selection is not optimal, 
 * which can be improved using various pivot selection strategies, such as the median-of-three method.
 */
export function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else if (arr[i] > pivot) {
        right.push(arr[i]);
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  /*
  // Example usage:
  const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
  const sortedArray = quickSort(unsortedArray);
  console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]
  */