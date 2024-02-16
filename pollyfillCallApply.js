Function.prototype.myCall = function (context, ...args) {
    context["func"] = this;
    context["func"](...args);
}

Function.prototype.myApply = function (context, argsArray) {
    context["func"] = this;
    context["func"](...argsArray);
}

const func = function (c) {
    console.log(this.a + this.b + c);
}

const func2 = function (c, d) {
    console.log(this.a + this.b + c + d);
}

let obj = {
    a: "1",
    b: "2"
}

func.call(obj, "3")
func.myCall(obj, "3")

func2.apply(obj, ["3", "4"])
func2.myApply(obj, ["3", "4"])