const numberedHello = (count, hello= " ") => {
    if (count < 1 ){
        return hello
    }
    return numberedHello(count - 1, hello + "hello")
}

numberedHello(5)