
class SelectionSort{

    sort(arrayDemo){
        let n = arrayDemo.length;
        for(let i = 0; i < n; i++){
            let min = i;

            for(let j = i + 1; j < n; j++){
                if(arrayDemo[j] < arrayDemo[min]){
                    min = j;
                    
                }
            }

            if(min != i){
                let tmp = arrayDemo[i];
                arrayDemo[i] = arrayDemo[min];
                arrayDemo[min] = tmp;
                
            }
            
        }
        return arrayDemo;
    }
}
module.exports = SelectionSort;