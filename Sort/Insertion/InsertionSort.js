// Insertion Sort

class Insertion{

    insertion(arrayDemo){

        for(let i = 0; i < arrayDemo.length; i++){
            let currentVaule = arrayDemo[i];
            let j;

            
            for(j = i-1; j >= 0 && arrayDemo[j] > currentVaule; j--){
                arrayDemo[j + 1] = arrayDemo[j];
            }
            arrayDemo[j + 1] = currentVaule;
        }

        return arrayDemo;
    }
}

module.exports = Insertion;

