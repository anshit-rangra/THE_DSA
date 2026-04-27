
function mergeInterval(intervals){

    if(intervals.length <= 1) return intervals;

    // sort the intervals 
    intervals = intervals.sort((a, b) => a[0] - b[0])

    let result = [];
    let prev = intervals[0]

    for(let i = 1; i<intervals.length; i++){
        let current = intervals[i]

        if(current[0] <= prev[1]){
            prev[1] = Math.max(prev[1], current[1])
        } else {
            result.push(prev)
            prev = current;
        }

    }

    result.push(prev)

    return result;
}

let arr = [[1,3],[2,6],[8,10],[15,18]]

let ans = mergeInterval(arr)

console.log(ans)