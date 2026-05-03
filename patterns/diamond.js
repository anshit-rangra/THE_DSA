
function diamond(rows){

    for(let i = 1; i<=rows; i++){
        
        for(let j = rows-1; j>i-1; j--){
            process.stdout.write("  ")
        }

        for(let k = 1; k<=( i*2 - 1 ); k++){
            process.stdout.write("* ")
        }

        console.log()

    }

    for(let i = 1; i<rows; i++){

        for(let j = 1; j<=i; j++){
            process.stdout.write("  ")
        }

        for( let k = 1; k<( (rows - i) * 2 ); k++){
            process.stdout.write("* ")
        }

        console.log()

    }

}

diamond(7)