// the code i am writing is the optimized approach for this problem

function singleNumber2(nums){
    let ones = 0;
    let twos = 0

    for (let num of nums) {

        ones = ( num ^ ones ) & ~twos;
        twos = ( num ^ twos ) & ~ones;
    }

    return ones;
}