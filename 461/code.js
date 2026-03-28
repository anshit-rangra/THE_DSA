

function hammingDistance(x, y) {
    let count = 0; // taking count to count the distance;
    let xor = x ^ y; // perform xor operation among x and y;
    while(xor > 0){ // create a while loop which will work  until xor should not equal to 0

        if(xor & 1) count++;

        xor>>1;
    }

    return count;
}