const solution = (longstring, idx=0) =>{
    if (idx >= longstring.length){
        return
    }
    console.log(longstring[idx])
    return solution(longstring, idx + 1)
}

solution("Usman")