const lessThan = (x) => {
    return (y) =>{
        return y < x
    }
}

const youngerThanCardiB = lessThan(27)
let miley = youngerThanCardiB(26)
console.log(miley)
let nicki = youngerThanCardiB(39)
console.log(nicki)

const smallerThan = lessThan(2)
let b = smallerThan(3)
console.log(b)
b = smallerThan(5) || youngerThanCardiB(5)
console.log(b)