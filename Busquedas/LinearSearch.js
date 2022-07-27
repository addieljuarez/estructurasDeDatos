


class LinearSearch {
    constuctor(){
        
    }

    linear(arrayDemo, element){
        const arrayReturn = [];
        for(let i = 0; i < arrayDemo.length; i++){
            if(element == arrayDemo[i]){
                
                arrayReturn.push(i);
            }
        }

        if(!arrayReturn){
            return -1;
        }

        return arrayReturn;
    }
    

}
module.exports = LinearSearch