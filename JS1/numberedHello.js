const numberedHello = (num, str= " ") => {

    if (num < 1 ){
        return str
    }

    return numberedHello(num - 1, str + "Ussy")

}

console.log(numberedHello(5))