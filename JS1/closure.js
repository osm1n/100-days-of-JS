const solution = (a, b) => {
    return (c) =>  {
        return a + b + c
    }

}

const fun1 = solution(1,2) 
console.log(fun1)

// Closure states that parameters a and b still exists in fun1 even after solution has exited

let res = fun1(3) // res = 1 + 2 + 3 = 6 
console.log(res)
res = fun1(5) // res = 1 + 2 + 5 = 8
console.log(res)
res = solution(2,3)(9) // res = 2 + 3 + 9 = 14
console.log(res)

// Example 2:

const solution1 = () => {
    let counter = 0 
    return () =>  {
        counter = counter + 1
        if (counter < 3)  {
            return 0
        }
      return counter      
    }
}

const arya = solution1() // function
console.log(arya)
let res1 = arya() // returns 0 but counter = 1
console.log(res1)
const sansa = solution1()
console.log(sansa) // function
res1 = arya() + sansa() 
console.log(res1) // 0, arya counter = 2, sansa counter = 1
res1 = arya() + sansa() 
console.log(res1) // 3, // arya counter = 3, sansa counter = 2
res1 = arya() + sansa() 
console.log(res1) // 7 // arya counter = 4, sansa counter = 3
res1 = arya() + sansa() 
console.log(res1) // 9 // arya counter = 5, sansa counter = 4
res1 = arya() + sansa()
console.log(res1) // 11, // arya counter = 6, sansa counter = 5
res1 = arya() + sansa()
console.log(res1) // 13 // arya counter = 7, sansa counter = 6