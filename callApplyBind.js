//Function borrowing 
const name1 = {
    firstName: "Prateek",
    lastName: "Sahay",
}

const fullName = function (state, country) {
    console.log(this.firstName + " " + this.lastName + " from " + state + ", " + country + ".");
}

fullName.call(name1, "ranchi", "india");

const name2 = {
    firstName: "Pengu",
    lastName: "Piggy",
}

fullName.apply(name2, ["ranchi", "india"]);

const bindMethod = fullName.bind(name2, "ranchi", "india");
console.log(bindMethod);
console.log(bindMethod());