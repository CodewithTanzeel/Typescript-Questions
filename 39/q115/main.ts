function days(day: number): void {
    switch(day) {
        case 1:
            console.log("Monday");
        break;
        case 2: 
            console.log("Tuesday");
        break;
        case 3:
            console.log("Wednesday");
        break;
        case 4: 
            console.log("Thursday");
        break;
        case 5:
            console.log("Friday");
        break;
        case 6:
            console.log("Saturday");
        break;
        case 7:
            console.log("Sunday");
        break;
        default:
            console.log("Enter the number between 1 to 7")

    }
}

days(4) // Thursday
days(10) // Error