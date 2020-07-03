function mapToNegativize(arr){
    const result = []
    for (let i = 0; i < arr.length; i++){
        result[i] = arr[i] *(-1) 
    }
return result
}

function mapToNoChange(arr){
    const result = []
    for (let i = 0; i < arr.length; i++){
        result[i] = arr[i] 
    }
return result
}

function mapToDouble(arr){
    const result = []
    for (let i = 0; i < arr.length; i++){
        result[i] = arr[i] * 2 
    }
return result
}

function mapToSquare(arr){
    const result = []
    for (let i = 0; i < arr.length; i++){
        result[i] = arr[i] ** 2 
    }
return result
}

function reduceToTotal(arr, start=0){
    let result = start
    for (let i = 0; i < arr.length; i++){
      result = result + arr[i] 
    }
return result
}

function reduceToAllTrue(arr){
    const result = []
    for (let i = 0; i < arr.length; i++){
        if(!arr[i]){
            return false
        } 
    }
return true
}

function reduceToAnyTrue(arr){
    const result = []
    for (let i = 0; i < arr.length; i++){
        if(!!arr[i]){
            return true
        } 
    }
return false
}