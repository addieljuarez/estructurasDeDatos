// Shell Sort
// Steps to Sorting Using Shell Sort
// 1.- Find all the gap we will be using to do the insertion sort on.
// 2.- We divide the array into small section for each of the gap.
// 3.- We do an insertion sort for each of the sections to sort them in order.
// 4.- Once all sections are sorted, we reduce the gap and redo step 2–3



// Antes de comenzar, debemos tener en cuenta que Shell Sort es una función destructiva, ya que modificará la matriz que coloque en ella. Si no desea modificar la matriz original, asegúrese de utilizar el operador de distribución para crear una nueva variable antes de inyectar este algoritmo de clasificación.
// El segundo método será crear un método para llenar automáticamente los espacios que usamos. Uno simple será usar la mitad de la longitud de la matriz para comenzar, y luego, para cada bucle después de eso, lo reduciremos a la mitad hasta que no quede nada. Como se trata de JavaScript, debemos usar Math.Floor para asegurarnos de obtener un número entero en lugar de un doble o flotante.
// A continuación, queremos dividir la matriz por el espacio para hacer la matriz en pequeñas secciones para que las ordenemos.
// Luego queremos ordenar la sección usando la ordenación por inserción.
// Con esto se realiza el Shell Sorting, y fuera de todos los bucles, podemos devolver el array si lo consideramos necesario.


class ShellSort {

    shellShort(arr){


        let increment = Math.floor(arr.length / 2);
        while (increment > 0) {
            for (let i = increment; i < arr.length; i++) {
                let j = i;
                let temp = arr[i];
                
                while (j >= increment && arr[j-increment] > temp) {
                    arr[j] = arr[j-increment];
                    j = j - increment;
                }
        
                arr[j] = temp;
            }
        
            if (increment == 2) {
                increment = 1;
            } else {
                increment = parseInt(increment*5 / 11);
            }
        }
    return arr;
    }
}
module.exports = ShellSort;