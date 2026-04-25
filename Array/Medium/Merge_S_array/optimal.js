function merge(arr1, arr2){

    let i = 5; // last valid element of arr1
    let j = arr2.length - 1;
    let idx = arr1.length - 1;

    while(i >= 0 && j >= 0){

        if(arr1[i] > arr2[j]){
            arr1[idx] = arr1[i];
            i--;
        } else {
            arr1[idx] = arr2[j];
            j--;
        }
        idx--;
    }

    while(j >= 0){
        arr1[idx] = arr2[j];
        j--;
        idx--;
    }

    return arr1;
}

let arr1 = [1,2,3,5,6,7,0,0,0,0,0];
let arr2 = [4,6,7,8,9];

console.log(merge(arr1, arr2));