function printVShapePattern(n) {
    // Write your logic here
    for(let i = 1; i<=n; i++){
        for(let j = 1; j<=(n*2-1); j++){
            if(i == j || j == (n*2-i)){
                process.stdout.write("*")
            }else {
                process.stdout.write(" ")
            }
        }
        console.log()
    }
}

printVShapePattern(7)