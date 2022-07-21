
class Stack {
    constructor(){

        this.stack = [];
    }


    // push
    push(element){
        this.stack.push(element);
    }

    // pop operation
    pop(){
        // return top most element from stack and removes it

        if(this.stack.length == 0){
            return "stack is empty"
        }else {
            return this.stack.pop();
        }
    }


    // is Empty operation
    isEmpty(){
        // return true if stack is empty
        return this.stack.length == 0;
    }



    // length operation
    length(){
        // return stack length
        return this.stack.length;
    }


    // print Stack operation
    printStack(){
        let stringBuilder = '';
        for (let index = 0; index < this.stack.length; index++) {
            stringBuilder += `${index}: ` + this.stack[index] + '\n';
            
        }
        return stringBuilder;
    }

}

module.exports = Stack;