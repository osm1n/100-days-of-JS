const sumEvens = (num, res = 0) => {
    if (num <= 0){
        return res
    }

    if (num % 2 === 0 ){
        res = num + res
    }

    return sumEvens(num-1, res)
}

console.log(sumEvens(8))