
function sumify(arr, c){
    const result = []

    for(let i = 0; i< arr.length; i++){
        let currentResult = 0
        if(i === 0) {
            currentResult += arr[i]
        }
        else{
            currentResult += arr[i]
            if(i%c > 0) currentResult += result[i-1]
            if(i-c >= 0) currentResult += result[i-c]
            if(i%c > 0 && i-c >= 0) currentResult -= result[i-c-1]
        }
        result.push(currentResult)
    }

    return result
}

const arr = [1,0,2,0,3,1]
const res = sumify(arr, 3)
console.log(res)
