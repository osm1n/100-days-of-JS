const moreHello = () => {
    let counter = " "
    return () => {
        counter = counter + "Hello"
        return counter
        //counter = counter + "Hello"
    }
}

const murHello = moreHello()
let b = murHello()
console.log(b)
b = murHello()
console.log(b)
b = murHello()
console.log(b)
b = murHello()
console.log(b)
b = murHello()
console.log(b)