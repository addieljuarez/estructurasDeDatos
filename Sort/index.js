
const ISort = require('./Insertion/InsertionSort');
const iSort = new ISort();

let before, took;

const arrayDemo = [6, 2, 44, 76, 543, 75, 23, 55, 13, 77, 88, 983, 63, 998, 546, 738, 746, 82, 73]

// const arrayDemo = [5, 2, 4, 6, 1, 3];


console.debug('===================================================');
console.debug('InsertionSorts');
console.debug('===================================================');

before = process.hrtime();
const insertionSort = iSort.insertion(arrayDemo);
took = process.hrtime(before);
console.debug(insertionSort);
console.debug('Insert Sort took: ' + took);