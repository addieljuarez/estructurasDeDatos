// Insertion Sort
// La ordenación por inserción funciona comparando un elemento con los elementos a su izquierda, 
// hasta que llega a un elemento que es más pequeño que él; a continuación, el elemento se inserta delante del elemento más pequeño.
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

