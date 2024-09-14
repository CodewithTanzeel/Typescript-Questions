let person = {
    personName: "",
    getName: function(name) {
       return this.personName = name
    }
}

person.getName("Marjan")
console.log(person.personName)

