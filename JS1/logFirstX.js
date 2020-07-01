const { strict } = require("assert")

const logFirstX = (char, given, idx=0) => {
    if (idx >= given || idx >= char.length){
        return
    }
    console.log(char[idx])
    return logFirstX(char, given, idx + 1)

}

logFirstX("winterfell", 3)