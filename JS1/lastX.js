const lastX = (char, given, res = " ", idx= char.length - 1)=>{
    if (res.length >= given || idx < 0 ){
        return res
    }

    return lastX(char, given, char[idx] + res, idx - 1)
}

lastX("winterfell", 3)