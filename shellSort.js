/** 
 * Shell sort is an extension of the insertion sort algorithm. It starts by sorting pairs of elements far apart from each other and then progressively reduces the gap between elements to be compared. Here's a JavaScript implementation of Shell sort: 
 */
export function shellSort(arr) {
    const n = arr.length;
    let gap = Math.floor(n / 2);
  
    while (gap > 0) {
      for (let i = gap; i < n; i++) {
        let temp = arr[i];
        let j = i;
  
        while (j >= gap && arr[j - gap] > temp) {
          arr[j] = arr[j - gap];
          j -= gap;
        }
  
        arr[j] = temp;
      }
  
      gap = Math.floor(gap / 2);
    }
  
    return arr;
  }

/*
// Example usage:
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = shellSort(unsortedArray);
console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]
*/