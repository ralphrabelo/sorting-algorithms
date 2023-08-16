
import { selectionSort } from './selectionSort.js';
import { bubbleSort } from './bubbleSort.js';
import { insertionSort } from './insertionSort.js';
import { shellSort } from './shellSort.js';
import { quickSort } from './quickSort.js';
import { mergeSort } from './mergeSort.js';
import { heapSort } from './heapSort.js';

let unsortedArray = [-1];

let initialTime;
let finalTime;
let differenceTime;
let sortedArray;

for (let i = 0; i < 50000; i++) {
    unsortedArray.push(Math.floor(Math.random() * 1000));
}

const unsortedArrayBubble = unsortedArray.slice();
const unsortedArrayInsertion = unsortedArray.slice();
const unsortedArrayShell = unsortedArray.slice();
const unsortedArrayQuick = unsortedArray.slice();
const unsortedArrayMerge = unsortedArray.slice();
const unsortedArrayHeap = unsortedArray.slice();

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