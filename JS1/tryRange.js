const tryNumRange = (num, fn, count = 1 )=>{
    if (count > num){
        return false
    }

    if (fn(count)){
        return true
    }
    return tryNumRange(num, fn, count + 1)
}

//Example 1
let res = tryNumRange(0, (e) => {
  return e + 10 > 20
})// res is false since range does not include 0

//Example 2
res = tryNumRange(-2, (e) =>{
  return e % 2 === 0
})// res is false since negative numbers are not included in the range

//Example 3
res = tryNumRange(8, (e) => {
  return e === 19
}) // res is false, because passing 1-8 into 
// the input function will never return true

//Example 4
res = tryNumRange(8, (e) => {
  return true
}) // res is true