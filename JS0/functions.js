
//return a number
const solution = () => {
    return 10 * 2
}
//retunr a string
const solution = () => {
    return "Hey" + !"Hello"
}
//return a boolean
const solution = () => {
    return !"Hello"
}

// return a function
const solution = () => {
    return () => {}
}

//  Callinf a function
const makeBasket = () => {
    return 500
}

const snitch = makeBasket // snitch is a function 
const batter = makeBasket // batter is a function
const result1 = makeBasket() // returns 500
const result2 = snitch()// returns 500 from snitch function
const result3 = batter() // returns 500 from batter function

// assigning the functions into result1 allows usage as a variable
// More examples

let points = 0
const igor = () => {
    points = points + 1
    return points
}
let luna = igor // function 
luna = igor() + igor() // 1 + 2 cuz igor was called twice

const carrotCakeRecipe = () => {}
let snitch = carrotCakeRecipe() // snitch returns undefined
snitch = !carrotCakeRecipe()//true cuz undefined is falsey

const work = () => {
    const blah = 5 + 8
}
const wage = work() //undefined

//Functions in a Function
let people = ""
const igor = () => {
    people = people + "muggle"
    return people
}

const solution = () => {
    igor()
    igor()
    igor()

}
const luna = solution() 
// luna is what solution function returns which is undefined
// people = muggle muggle muggle

//Function that returns another arrow function
const solution = () => {
    return ()=> {
        console.log()
        console.log()
        console.log()
    }

}

//Parameters and Arguments
const lucius = (dobby) => {
    return dobby + 2
}
let james = lucius(5) //james = 7
james = lucius(5) === lucius(3) + 2 // True cuz 7 === 5+2

let points = 0
const draco = (kreacher, winky, fluffy) => {
    points = kreacher + winky
    return points + fluffy
}
const malfoy = draco(1,2,3) + draco(3,2,1)
// draco(1,2,3) = 6
// draco(3,2,1) = 6 = 12 and points is d last value 5


const gradle = () =>{
    return 10
}
let wald = (cast) =>{
    return cast()
}
let gradlewald = wald(gradle)

//seTimeout
const invisible = () => {
    setTimeout( () => {
        return 100
    }, 1000)
}
const cloak = invisible() // undefined, invisible function has no return

const solution = (ussy) => {
    return () => {}
}

const solution = (one) => {
    return () =>{}
}

const solution = (bool) => {
    return () => {}
}
// cannot use real values for paraments it must be variable names
const solution = (one, two) => {
    return () => {}
}

console.log("Hello", "Baby")

app.get(() => {});

setTimeout(() => {}, 1000);

/**Functions with Conditional Behavior */
const rem = (events) => {
    if (events > 5) {
        return "Well done"
    }
    return "fail"
}

let res = rem(0) // fail
res = rem(20) // Wel done

const newt = (x) => {
    if (x === 5) {
        return 13
    }
    return x + 1
}

let tonks = newt(3) // 4
tonks = newt(11) //12
tonks = newt(5) // 13

const neville = (long, bottom) => {
    if (long > bottom){
        long = long + 3
    }
    return long
}
let hermione = neville(4,5) // 4
hermione = neville(9,2) //12

let points = 3
const critic = (arthur, percy) => {
    points = points + 1
    if (arthur > percy){
        return points
    }
    return arthur + points
}
const hedwig = critic(4,5) || critic(9,2)// 8 || 4 = 8 
const nick = critic(9,2) // points is now 4 when its called again so 4 + 1 = 5

let points = 3
const charlie = (arthur, percy)> {
    points = points + 1
    if (arthur > percy){
        return points
    }
    return 0
}
const hedwig = charlie(4,5) || charlie(9,2) // 0 || 4 = points is updated from the left call = 5
const nick = charlie(9,2) //points is now 5 from the previous call, now points is 6


const massiveOrSmall = (x, y) => {
    sum = x + y
    if (sum > 100){ // or if (x + y > 100)
        return "massive"
    }
    return "small"
}

const sumorTen = (a, b) => {
    if(a > 10 && b > 10){
        return 10
    }
    return a + b
}

const combineIfOver34 = (a, b, c) => {
    if (c > 42 ) {
        return a + b
    }
    return ""
}

const compareString = (a, b) => {
    return a === b
}
