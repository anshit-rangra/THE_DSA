

function validParanthesis(str){

    let valid = true;

    let map = new Map([
        [")", "("],
        ["]", "["],
        ["}", "{"]
    ])

    const stack = [];

    for(let i = 0; i<str.length; i++){

        if(str[i] === "(" || str[i] === "[" || str[i] === "{"){

            stack.push(str[i])

        } else if(map.get(str[i]) === stack[stack.length-1]) {
            stack.pop()
        } else {
            valid = false;
            break;
        }

    }

    return valid && stack.length === 0;

}

const ans = validParanthesis("([])")

console.log(ans)