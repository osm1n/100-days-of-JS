const OddOnly = (char, idx=0)=>{
    if (idx >= char.length){
        return
    }

    if (idx % 2 !== 0){
        console.log(char[idx])
        
    }
    return OddOnly(char, idx+1)
}

OddOnly("bananayy")