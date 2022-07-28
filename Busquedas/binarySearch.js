class BinarySearch {

    
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

module.exports = BinarySearch;