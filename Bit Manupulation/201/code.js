function rangeBitwiseAnd(left, right) {

    while(left < right) {
        right = right & (right - 1)
    }
    return right;
}