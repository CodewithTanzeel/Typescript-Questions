const greeting = (userName?: string) => {
    userName ? console.log("Hello", userName) : console.log("Hello anonymous")

}

greeting("Ahmed") // Hello Ahmed
greeting() // Hello anonymous