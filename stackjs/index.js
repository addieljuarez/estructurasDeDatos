const Stack = require('./stack');
const assert = require('assert').strict;
const stack = new Stack();


console.log('check if the stack is empty');
console.log(stack.isEmpty());
assert.deepEqual(stack.isEmpty(), true);


console.log('Check if the stack has zeron length');
console.log(stack.length());  
assert.deepEqual(stack.length(), 0);


console.log('Pop from the empty stack');
console.log(stack.pop()); 



console.log('**Push 3 memory slots to the stack');
stack.push('0x0000'); 
stack.push('0x0001'); 
stack.push('0x0002'); 


console.log('stack length:'+stack.length()); 
assert.deepEqual(stack.length(), 3);

console.log(stack.printStack());


console.log('Pop the last memory slot from the stack');
let memorySlot = stack.pop();

console.log(memorySlot);
assert.deepEqual(memorySlot, '0x0002');

console.log('stack length:'+stack.length());
assert.deepEqual(stack.length(), 2);

console.log(stack.printStack()); 