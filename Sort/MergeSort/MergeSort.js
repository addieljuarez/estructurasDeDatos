

class MergeSort{

    mergeArray(a, b){

        const c = [];

        while (a.length && b.length){
            c.push(a[0] > b[0] ? b.shift() : a.shift());
        }

        while(a.length){
            c.push(a.shift());
        }
        while(b.length){
            c.push(b.shift());
        }

        return c;
    }


    sort(arrayDemo){
        if(arrayDemo.length < 2) return arrayDemo;
        const middle = Math.floor(arrayDemo.length / 2);
        const array_l = arrayDemo.slice(0, middle);
        const array_r = arrayDemo.slice(middle, arrayDemo.length);
        const sorted_l = this.sort(array_l);
        const sorted_r = this.sort(array_r);

        return this.mergeArray(sorted_l, sorted_r);
    }
}
module.exports = MergeSort;