

// const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
// const elementBinary = 67;  // is prime??


class binarySearch {

    constructor(){

    }
    
    binary(arrayBinary, element){
        let min = 0;
        let max = arrayBinary.length - 1;
        let guess;
        let tries = 0;

        while(max >= min){
            tries++;
            guess = parseInt((max + min) / 2);

            if(arrayBinary[guess] == element){
                
                console.log('took tries: ' + tries);
                return guess;
            }else if(arrayBinary[guess] < element){
                min = guess + 1;
            }else{
                max = guess - 1;
            }
        }
        console.log('took tries: ' + tries);
        return -1
    }
}

module.exports = binarySearch;