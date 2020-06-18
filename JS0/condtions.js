
const { EventEmitter } = require("events")
const { CANCELLED } = require("dns")

/** if (condition) {
    //shit load of code
}
The code above executes if the codition is a Truthy
**/
let a = 100 // 100 is assigned to a
if(a % 2){ // a % 2 = 0 which is falsey
    a = 90 // anything inside { } wont run
}

const b = a + 1 // b = 101
let a = 9 || 10 // 9 is truthy so value of 9 is assigned to a
if (a > 5) { // truthy 9 > 5
    a = 90
}
const b = a + 1 // b = 91

/** Else Statement
 * specifies code to run when the codition is a falsey
 * if (condition){
 * } else {
 * shit to do here if the codition is false
 * }
 * Note: If you dont an else dont use it!!
 * No need to use else wherever if is used.
 */

 const total = 6
 let result = ""
 if (total < 5){
     result = "Fail"
 } else {
     result = "Pass"
 }

/** OBJECTS
 * Object is a standalone entity with properties and types.
 * e.g A car of different types, color, weight, design, material etc
 * In JS each object is a collection of properties each property has a name aka key and value like a dict
 * Property name - Key can be any string including empty string
 * Value can be any type such as string, Boolean, Number, Null but cannot be undefined
 * Objects can be used to store a collection of data and more complex entities
 * 
 * new keyword is used to create an Object e.g
 * 
 * Person and Array Objects
 * const a = new Person()
 * const b = new Array()
 */

 let a = new Date()
 a = new function()
 a = new Array()
 a = new Object()
 a = new EventEmitter()

 /** Functions
  * Set of instructions written to perform a specific task
  * it executes only when something invokes it (calls it)
  * - reuse code
  * - same code diff arguments
  * - example of a bad function
  * without the return keyword, the function returns undefined
  */

  const great = new Function("a", "b", "return a + ' says, hello' + b")
  //great is variable holding a function object

  let c = great("Ironman", "Poodle") // c = Iroman says hello Poodle
  c = great ("base2", "base9") // c = base2 says, hello base9

  const fn = new Function('a', 'b', 'a + b')
  const result = fn(23, 2) // undefined since there is no return keyword

  const fn = new Function('return 10')
  const result = fn() // 10

  const fn = new Function('x', 'y', 'return x === y')
  let result = fn()// true since both variables are undefined
  result = fn(9,9) // true
  result = fn(9,8)// false

  const secret = new Function("a", "b", "a = a + 9; return a + b")
  let b = secret // assign the function secret to b
  let c = secret("base9", "base2")// base99base2
  c = b(10, 2) //21

  // Bad example
let greet = new Function("a", "b", "return a + ' says, hello ' + b")
let secret = new Function("a", "b", "a = a + 9; return a + b")

//Better way to rewrite
greet = function(a, b){
    return a + 'says, hello ' + b
}

secret = function(a, b){
    a = a + 9
    return a + b
}

/** Function Return
 * Upon reaching the return statement the function stops executing and
 * return the value and exit the function
 * if its called from a statement, it wil return to the statement calling it
 * and continue to execute the next statement **/

 const sum = function(a, b){
     return a + b
     const c= a - b // this will NEVER be executed
 }

 const x = sum(4, 3); //function sum is called and returned value will be assigned to x variable

 /** Arrow Function
  * one other way to create a function object is to use an arrow function
  * defined as => 
  * No need to use the keyword function
  * this is d preferred method dis days (reasons later)
  * 
  */

  const name = (param1, param2, param3) => {
      // statements
  }

  //Example of preferred methods

  const makebasket = () => {
      const b = 500
      return b
  }

const fn = (a, b ) => {
    let c = a + b
    if (c > 2){
        c = 0
    }
    return c + 1
}

const result = fn(22, 1)
