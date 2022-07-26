
class Queue{

    constructor(){
        this.dataStore = Array.prototype.slice.call(arguments, 0);
        // this.enqueue = enqueue;
        // this.dequeue = dequeue;
        // this.empty = empty;
        // this.print = print;
    }

    

    enqueue(element){
        this.dataStore.push(element);
    }

    dequeue(){

        console.log('Original Array: ' + JSON.stringify(this.dataStore));
        const elementDelete = this.dataStore.shift();
        console.log('Delete: ' + elementDelete);
        console.log('New Array: ' + JSON.stringify(this.dataStore));
        // return 
    }

    empty(){
        return this.dataStore = [];
    }

    print(){
        this.dataStore.forEach(element => {
            console.log(element);
        });
    }
}

module.exports = Queue;