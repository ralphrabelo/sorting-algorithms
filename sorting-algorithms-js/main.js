
import { selectionSort } from './selectionSort.js';
import { bubbleSort } from './bubbleSort.js';
import { insertionSort } from './insertionSort.js';
import { shellSort } from './shellSort.js';
import { quickSort } from './quickSort.js';
import { mergeSort } from './mergeSort.js';
import { heapSort } from './heapSort.js';

const arraySize = 50000;

let initialTime;
let finalTime;
let differenceTime;
let sortedArray;

let unsortedArray = [];

for (let i = 0; i < arraySize; i++) {
    unsortedArray.push(Math.floor(Math.random() * arraySize*2));
}

const unsortedArrayBubble = unsortedArray.slice();
const unsortedArrayInsertion = unsortedArray.slice();
const unsortedArrayShell = unsortedArray.slice();
const unsortedArrayQuick = unsortedArray.slice();
const unsortedArrayMerge = unsortedArray.slice();
const unsortedArrayHeap = unsortedArray.slice();
const unsortedArrayJs = unsortedArray.slice();

console.log(unsortedArray);

initialTime = new Date().getTime(); 
sortedArray = selectionSort(unsortedArray);
finalTime = new Date().getTime();
differenceTime = finalTime - initialTime;
console.log("selectionSort: ", differenceTime);

initialTime = new Date().getTime(); 
sortedArray = bubbleSort(unsortedArrayBubble);
finalTime = new Date().getTime();
differenceTime = finalTime - initialTime;
console.log("bubbleSort: ", differenceTime);

initialTime = new Date().getTime(); 
sortedArray = insertionSort(unsortedArrayInsertion);
finalTime = new Date().getTime();
differenceTime = finalTime - initialTime;
console.log("insertionSort: ", differenceTime);

initialTime = new Date().getTime(); 
sortedArray = shellSort(unsortedArrayShell);
finalTime = new Date().getTime();
differenceTime = finalTime - initialTime;
console.log("shellSort: ", differenceTime);

initialTime = new Date().getTime(); 
sortedArray = quickSort(unsortedArrayQuick);
finalTime = new Date().getTime();
differenceTime = finalTime - initialTime;
console.log("quickSort: ", differenceTime);

initialTime = new Date().getTime(); 
sortedArray = mergeSort(unsortedArrayMerge);
finalTime = new Date().getTime();
differenceTime = finalTime - initialTime;
console.log("mergeSort: ", differenceTime);

initialTime = new Date().getTime(); 
sortedArray = heapSort(unsortedArrayHeap);
finalTime = new Date().getTime();
differenceTime = finalTime - initialTime;
console.log("heapSort: ", differenceTime);

initialTime = new Date().getTime(); 
unsortedArrayJs.sort((a,b) => {
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    }); 
finalTime = new Date().getTime();
differenceTime = finalTime - initialTime;
console.log("js sort: ", differenceTime);
console.log("sorted array: ", unsortedArrayJs);