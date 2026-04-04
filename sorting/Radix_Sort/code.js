function countingSortForRadix(arr, exp) {
    let n = arr.length;
    let output = new Array(n).fill(0);
    let count = new Array(10).fill(0); 

    // count occurrences
    for (let i = 0; i < n; i++) {
        let digit = Math.floor(arr[i] / exp) % 10;
        count[digit]++;
    }

    // prefix sum (important for stability)
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // build output array (right to left for stability)
    for (let i = n - 1; i >= 0; i--) {
        let digit = Math.floor(arr[i] / exp) % 10;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }

    return output;
}

function radixSort(arr) {
    let max = Math.max(...arr);
    let exp = 1;

    while (Math.floor(max / exp) > 0) {
        arr = countingSortForRadix(arr, exp);
        exp *= 10;
    }

    return arr;
}

// test
const arr = [170, 45, 75, 90, 802, 24, 2, 66];

console.log(radixSort(arr));