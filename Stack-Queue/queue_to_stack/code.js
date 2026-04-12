
var MyStack = function() {
    this.q1 = []
    this.q2 = []
    
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q2 = []
    this.q2.push(x)
    while(this.q1.length > 0){
        this.q2.push(this.q1.shift())
    }

    [this.q1, this.q2] = [this.q2, this.q1]
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.q1.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.q1[0]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    
    return this.q1.length == 0;
};
