const name = {
    firstName: "Prateek",
    lastName: "Sahay",
}

const fullName = function (state, country) {
    console.log(this.firstName + " " + this.lastName + " from " + state + ", " + country);
}


Function.prototype.myBind = function (...args) {
    const obj = this;
    console.log(obj);
    return function(...args2) {
        // console.log(args2);
        const remainingArgs = args.slice(1);
        console.log(args);
        obj.apply(args[0], [...remainingArgs, ...args2]);
    }
}

const bindFunc = fullName.bind(name, "ranchi");
console.log(bindFunc("india"));  

const bindFunc1 = fullName.myBind(name, "ranchi");
console.log(bindFunc1("india"));  

