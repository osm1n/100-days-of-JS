const hello3x = () =>{
  counter = 0
  return () => {
    if (counter < 3){
      counter = counter + 1
      return "Hello"
    } 
    return " ' ' "
  }
}

const threeF = hello3x()
let b = threeF()
console.log(b)
b = threeF()
console.log(b)
b = threeF()
console.log(b)
b = threeF()
console.log(b)