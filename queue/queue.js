
class Queue{

    constructor(){
        this.dataStore = Array.prototype.slice.call(arguments, 0);
    }
    

    enqueue(element){
        this.dataStore.push(element);
    }

    dequeue(){

        console.log('Original Array: ' + JSON.stringify(this.dataStore));
        const elementDelete = this.dataStore.shift();
        console.log('Delete: ' + elementDelete);
        console.log('New Array: ' + JSON.stringify(this.dataStore));
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