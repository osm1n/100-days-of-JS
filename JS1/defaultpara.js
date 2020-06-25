const add1 = (x=3, y=5) => {
    return x + y + 8
}

let res = add1 // function
res = add1() //16
console.log(res)
res = add1(1) + add1() + add1(4, 5) // 9 + 14 + 17 = 47
console.log(res)
res = add1(5) === (add1(2, 3) + 2) //false
console.log(res)

//Recursion - a function calling itself
const addTo = (counter = 1, result = 0) => {
    if (counter > 4){
        return result // exit
    }
    return addTo(counter + 1, result + counter) // recursive part
}

let res1 = addTo
res1 = addTo(2)
console.log(res1)
res1 = addTo(3)
console.log(res1)

