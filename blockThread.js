console.log("Start")

setTimeout(function cb() {
    console.log("Callback executed");
}, 5000);

console.log("End");

let startDate = new Date().getTime();
let endDate = startDate;

while(endDate < startDate + 10000) {
    endDate = new Date().getTime();
}

console.log("while expire")

// log
// Start
//End
//While expire
//Callback executed