class LinearSearch {

    linear(arrayDemo, element){
        const arrayReturn = [];
        let tries = 0;
        for(let i = 0; i < arrayDemo.length; i++){
            if(element == arrayDemo[i]){
                tries = i;
                arrayReturn.push(i);
            }
        }

        if(!arrayReturn){
            console.log('took tries: ' + tries);
            return -1;
        }
        console.log('took tries: ' + tries);
        return arrayReturn;
    }
    

}
module.exports = LinearSearch