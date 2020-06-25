const fizzbuzz = (start, count = 1) =>{
    if (count > start ){
        return
    }
    let val = count
    if (count % 3 === 0){
        val = "Fizz"
    }
    if (count % 5 === 0){
        val = "buzz"
    }
    if (count % 3 === 0 && count % 5 === 0){
        val = "FizzBuzz"
    }

    console.log(val)
    return fizzbuzz(start, count + 1)

}
    
fizzbuzz(20)
