var countBits = function(n) {
    let arr = [];
    for(let i = 0; i<=n; i++) {
        let count = 0;
        let j = i;
        while(j>0){
            if(j & 1) count++
            j = j>>1;
        }
        arr[i] = count;
    }

    return arr;
};