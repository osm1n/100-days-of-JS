const removeShit = (char, given, idx = 0, acc = "") =>{
    if (idx === char.length){
        return acc
    }

    if (char[idx] !== given){
        acc = acc + char[idx]
    }

    return removeShit(char, given, idx + 1, acc)
}

removeShit("jump", "u")