/**
 * Heap sort is a comparison-based sorting algorithm that uses a binary heap data structure to build the sorted array. 
 * It first builds a max-heap (for ascending order) or a min-heap (for descending order) from the input array, 
 * and then repeatedly extracts the root element to get the sorted array. Here's a JavaScript implementation of heap sort:
 */
export function heapSort(arr) {
    // Build a max-heap from the input array
    buildMaxHeap(arr);
  
    let n = arr.length;
  
    // Extract elements one by one from the max-heap and place them at the end of the array
    for (let i = n - 1; i > 0; i--) {
      // Swap the root (max element) with the last element in the unsorted portion of the array
      [arr[0], arr[i]] = [arr[i], arr[0]];
  
      // Heapify the reduced heap (excluding the last sorted element)
      heapify(arr, i, 0);
    }
  
    return arr;
  }
  
  function buildMaxHeap(arr) {
    const n = arr.length;
  
    // Start from the last non-leaf node and heapify all nodes from that node to the root
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }
  }
  
  function heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
  
    // Find the largest element among the current node and its left and right child (if they exist)
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }
  
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }
  
    // If the largest element is not the current node, swap the current node with the largest element
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
  
      // Recursively heapify the affected subtree
      heapify(arr, n, largest);
    }
  }
  /*
  // Example usage:
  const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
  const sortedArray = heapSort(unsortedArray);
  console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]
  */