
const ISort = require('./Insertion/InsertionSort');
const iSort = new ISort();

const ShShort = require('./Insertion/ShellSort');
const shShort = new ShShort();

let before, took;

const arrayDemo = [6, 2, 44, 76, 543, 75, 23, 55, 13, 77, 88, 983, 63, 998, 546, 738, 746, 82, 73, 1, 3, 6, 1, 2, 999, 232, 5]

// const arrayDemo = [5, 2, 4, 6, 1, 3];


console.debug('===================================================');
console.debug('InsertionSorts');
console.debug('===================================================');

before = process.hrtime();
const insertionSort = iSort.insertion(arrayDemo);
took = process.hrtime(before);
console.debug(insertionSort);
console.debug('Insert Sort took: ' + took);



console.debug('===================================================');
console.debug('ShellSorts');
console.debug('===================================================');

before = process.hrtime();
const shellSort = shShort.shellShort(arrayDemo);
took = process.hrtime(before);
console.debug(shellSort);
console.debug('Shell Sort took: ' + took);