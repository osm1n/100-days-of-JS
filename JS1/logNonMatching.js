const logNonMatching = (str, given, idx=0)=>{
    if (idx >= str.length){
        return
    }

    if (str[idx] !== given){
        console.log(str[idx])
    }
    
    return logNonMatching(str, given, idx + 1)
}

logNonMatching("I love computer science", " ")