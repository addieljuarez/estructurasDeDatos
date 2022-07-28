
const Linear = require('./LinearSearch');
const linear = new Linear();

const Binary = require('./binarySearch');
const binary = new Binary()


const arrayDemo = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
const element = 67;
let before, took;

console.log('===============================');
console.log('LINEAR SEARCH');

before = process.hrtime();
const linearSearch = linear.linear(arrayDemo, element);

if(linearSearch == -1){
    console.log('No found linear: ', element);
}else{
    console.log('index: ', JSON.stringify(linearSearch));
}
took = process.hrtime(before);
console.log('linear search took: ' + took);
console.log('===============================');


console.log('===============================');
console.log('BINARY SEARCH');

before = process.hrtime();
const binarySearch = binary.binary(arrayDemo, element);
if(binarySearch == -1){
    console.log('No found binary: ', element);
}else { 
    console.log('index: ', binarySearch);
}
took = process.hrtime(before);
console.log('binary search took: ' + took);
console.log('===============================');

