/** 
 * Shell sort is an extension of the insertion sort algorithm. It starts by sorting pairs of elements far apart from each other and then progressively reduces the gap between elements to be compared. Here's a JavaScript implementation of Shell sort: 
 */
export function shellSort(arr)
{
    let n = arr.length;
   
        // Start with a big gap, then reduce the gap
        for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))
        {
          
            // Do a gapped insertion sort for this gap size.
            // The first gap elements a[0..gap-1] are already
            // in gapped order keep adding one more element
            // until the entire array is gap sorted
            for (let i = gap; i < n; i += 1)
            {
              
                // add a[i] to the elements that have been gap
                // sorted save a[i] in temp and make a hole at
                // position i
                let temp = arr[i];
   
                // shift earlier gap-sorted elements up until
                // the correct location for a[i] is found
                let j;
                for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)
                    arr[j] = arr[j - gap];
   
                // put temp (the original a[i]) in its correct
                // location
                arr[j] = temp;
            }
        }
        return arr;
}

/*
// Example usage:
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = shellSort(unsortedArray);
console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]
*/