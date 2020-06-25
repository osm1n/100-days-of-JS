//variables - default counter to keep count
// condition to exit out the loop
// logic to loop thru 99x

const love = (count = 0)=> {
    if (count === 99){
        return
    }
    console.log("Things i do for love")
    return love(count + 1)
}
// revmate-docs
// muxIx4qbiL0uTn5KSQM0pqD8XM/nYShkssYFc7jUeDw

// HBDKZSGJNHHVADT5QWVJ
love()