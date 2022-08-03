

class BubbleSort{

    sort(arrayDemo){
        for(let i = 0; i < arrayDemo.length; i++){
            for (let j = 0; j < ( arrayDemo.length - i - 1 ); j++) {
                
                if(arrayDemo[j] > arrayDemo[j + 1]){
                    let temp = arrayDemo[j];
                    arrayDemo[j] = arrayDemo[j + 1];
                    arrayDemo [j + 1] = temp
                }
                
            }
        }
        return arrayDemo;
    }
}
module.exports = BubbleSort;