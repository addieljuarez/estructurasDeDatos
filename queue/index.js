
const Queue = require('./queue');

const queue = new Queue();

console.log('Insert New Elements');
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
console.log('===============================');

console.log('Print Elements');
queue.print();
console.log('===============================');

console.log('Delete first Element');
queue.dequeue();
console.log('===============================');

console.log('Empty Array');
const empty = queue.empty();
console.log('Array: ' + JSON.stringify(empty));