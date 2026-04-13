/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {

    let map = new Map();

    for(let i = 0; i<s.length; i++){

        if(map.get(s[i])){
            map.set(s[i], map.get(s[i]) + 1)
            
        } else {
            map.set(s[i], 1)
        }

    }


    let ans;
    for(let [key, value] of map){
        if(value === 1){
            ans = key;
            break;
        }
    }

    for(let i = 0; i<s.length; i++){
        if(s[i] === ans){
            return i;
        }
    }

    return -1
    
};