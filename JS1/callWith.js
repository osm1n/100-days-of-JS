const callWith = (n) => {
    return (n2) => {
        return n2(n)
    } 
}

const fun = callWith(10)
let b = fun((num) => {
    return num + 5
})

console.log(b)

b = fun((num) => {
  return num + "hello"
}) // b is "10hello"
console.log(b)

b = fun((num) => {
  return 500 % num
}) // b is 0
console.log(b)