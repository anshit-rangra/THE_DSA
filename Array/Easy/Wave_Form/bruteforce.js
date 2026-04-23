

function waveSort(arr){

    let current = true // true is up and false is down

    let wave = [];
    
    let i = 0;
    let j = 1;
    
    while( i<arr.length && j < arr.length ){

        let elem = 0;

        if(current){
            elem = Math.max(arr[i], arr[j])

            if(elem === arr[i]) {
                
                if(i<j) i=j+1;

                else i++

            } 
            else { 

                if(j<i) j=i+1;

                else j++
             }

       
            } 
            
        else {
            elem = Math.min(arr[i], arr[j])

            if(elem === arr[i]) {
                
                if(i<j) i=j+1;
                else i++

            }else { 
                if(j<i) j=i+1;
                else j++
             }

        }

        wave.push(elem)
        current = !current

    }

    if(i<arr.length){
        wave.push(arr[i])
        i++
    }

    if(j<arr.length){
        wave.push(arr[j])
        j++
    }



        return wave;



}

let array;

// array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]

// array = [1,2,3,4,5,6]

array = [ 6, 3, 8, 1, 2, 5, 7, 9, 12, 11]

array = [ 6, 3, 8, 1, 2, 5, 7, 9, 12, 11, 13]


const ans = waveSort(array)


console.log(ans)