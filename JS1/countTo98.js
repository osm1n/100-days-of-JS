const countTo98 = (count =0) =>{
    if (count > 98){
        return
    }
    console.log(count)
    return countTo98(count + 1)
}

countTo98()

const countToMe = (input, start=8) =>{
    if (start > input){
        return 
    }
    console.log(start)
    return countToMe(input, start + 1)
}

countToMe(13)