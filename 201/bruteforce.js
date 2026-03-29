var rangeBitwiseAnd = function(left, right) {

    let result = left;
    
    for(let i = left+1; i<=right; i++){
        if(result === 0) break;
        result = result & i;
    }
    
    return result;
};