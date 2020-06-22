const runIt = (a) =>{
    return (b, c) => {
        return a(b, c)
    }
}

const substract = runIt((b, c) => {
    return b - c
})

console.log(substract)

let bb = substract(30, 7)
console.log(bb)
bb = substract(7, 4)
console.log(bb)
bb = substract(-30, 7)
console.log(bb)

//Example 2:
const fun = runIt((b, c)=>{
    return "hello"
}) 

let cc = fun(27, 4)
console.log(cc)
cc = fun(12,12)
console.log(cc)

