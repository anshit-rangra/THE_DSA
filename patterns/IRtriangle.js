function printInvertedRightTriangle(n) {
    // Write your logic here
    for(let i = n; i>=1; i--){
        for(let j = i; j>=1; j--){
            process.stdout.write(`* `)
        }
        console.log()
    }
}

printInvertedRightTriangle(5)