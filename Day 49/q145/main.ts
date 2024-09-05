function parenFunc(func: (str: string) => void) {
    func("programming")
}

function uppercase(str: string) {
    console.log(str.toUpperCase())
}

parenFunc(uppercase)