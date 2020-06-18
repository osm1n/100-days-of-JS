
marvin = 0
console.log(marvin)
marvin = 42
console.log(marvin)

hands = 90
console.log(hands)

/** Above is a bad habit of coding even though it works
 * 
 * preferrably use const and let 
 * 
 * const stands for constant, used for variables that wont be changed
 * */

const points = 5
const res = points + 2
console.log(res)

//changing a const results in a TypeError

//points = 7

/** let is used to declare a variable that can be changed */
let point = 10
point = 15
console.log(point)

//RULE OF THUMB IS ALWAYS USE CONST UNTIL YOU CAN'T

/************************
 * 
 * Primitive Data (we will know in Arrays)
 * cuz dia values contain only thing eg string, number or boolean
 * 3 types - Numbers, Strings and Boolean
 * We perform operations such as +, -, /, %
 * 
 * ****************************** */

 //Numbers
 const fi = 5 //  = 5
 const mission = fi + 1 // = 6
 const deed = fi + mission // = 11
 const space = 8 * 8 // = 64
 const ship = space / 4 // = 16

 let rem = 15 % 3 // = 0
 rem = 15 % 7 // = 1

 //Strings
const hello = "i have 500 bucks"
let aa = "hello" // hello
aa = hello // i have 500 bucks

const a = "hello"
const message = a + ` world`
const c = 5
const d = c + message
console.log(d)
const e = `<h1>` + a + '</h1>'
console.log(e)
const f = 5 + "hellow"
console.log(f)

const fname = "Tony"
const lname = `stark`
const loc = "Paris"
const msg = "Welcome to " + loc + ', ' + fname + ' ' + lname + ' !'
console.log(msg) 

const message1 = `Welcome to ${loc}, ${fname} ${lname}!` //using expression placeholders. Lovely
console.log(message1)

const actor = "We"
const location = "farmer's market"

const story = `${actor} plan to go to a ${location} tomorrow`
console.log(story)

/** Boolean - can either be True or False
 * using operators like === for equal to and !== not equal to
 * > greater than and < is smaller dan */ 

 const lupin = 5 === 5 // True
 const harry = 2
 const ron = 4
 const ginny = (harry + 2) === ron // True
 const dumbledore = ginny + 'hello' // 4hello
 const theSame = harry !== 'harry' // True
 console.log(lupin, ginny, dumbledore, theSame)

 //Truthy and Falsey
 /** Every data type in JS is either a Truthy or falsey 
  * there are six (6) Falsey values in JS for now we learn only 3
  * false - 0 - " " (empty string) - undefined - null, NaN (not a number)
  * Everything else is a Truthy
  * They are requried for the following operators
  * !, || and &&
 */

 const josh = !0 // true
 const hannah = 0 // falsey
 const sirius = !hannah // true
 const charity = !"" // true
 const funny = !!"" //false
 const bone = !!!"hello world" // false
 const tricks = "hello" + !!0// hellofalse
 const zach = false // falsey
 const final = zach === tricks // falsey
 const semi = zach === !tricks // truthy

 /** And Operator evaluates as follows:
  * if the left side is falsey, return that value,
  * if the left side is truthy return the value on the right
  */

  const z = "" && "hello" // value returned is "" since the left is a falsey empty string

  let x = "hello" && false //false
  console.log(x)
  z = "hello" && 5 // 5
  z = 5 && "hello" // "hello"
  z = true && "" // ""
  z = 0 && "hello" // 0

  /** OR Operator evaluates as follows:
   * if the left side is truthy return that value
   * if the left side is falsey return the right value
   */

  const y = "happy" || "day" // "happy"
  const w = "" || "hello" // "hello"

  let x = 7 || false // 7
  x = false || "hello" // "hello"
  x = 0 || "world" // "world"
  x = 7 || 9 // 7
  x = 7 && 9 // 9
  x = 0 && "" // 0

  let cedric = 5 && "hello" // "hello"
  cedric = 5 && !"hello" // false
  const albus = (5+5) || 0 // 10
  const dumbledore = 0 || 10 // 10
  const harry = albus > 5 && albus < 10 //fasley

  /*** Summary i learned about assigining variables
   * Always use const (cannot modify variable) when possible
   * let - varibale can be changed.
   * Primitive Data types - NUmbers, Strings and Boolean with operators +, -, /, %
   * good to use placeholders for adding up strings e.g 'i am going to meet ${fisrtname} ${lastname}'
   * 
   * Truthy and Falsey - dis one dat will be easy to forget cuz of the rules
   * 6 falsey - 0, "", false, Null, undefined, NaN
   * Everything else is a Truthy
   * 
   * AND - &&, OR - ||, NOT - ! Operators
   * refer above section for rules
   * 
   */
