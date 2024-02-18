function kadanesAlgorithm(arr) {
    // Initialize variables to track the maximum subarray sum ending at the current index,
    // and the overall maximum subarray sum.
    let maxEndingHere = arr[0];
    let maxSoFar = arr[0];
    
    // Iterate through the array starting from the second element.
    for (let i = 1; i < arr.length; i++) {
        // Update the maximum subarray sum ending at the current index.
        // We either continue the previous subarray or start a new one.
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        
        // Update the overall maximum subarray sum.
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
}