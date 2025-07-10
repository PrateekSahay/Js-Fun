
const arr = [
    {first: "Prateek", last: "Sahay", age: 29},
    {first: "P1", last: "S1", age: 35},
    {first: "P2", last: "S2", age: 43},
    {first: "P3", last: "S3", age: 29},
    ];
    
    
    const res = arr.reduce((acc, curr) => {
        if (acc[curr.age]) {
            acc[curr.age]++
        }
        else {
            acc[curr.age] = 1;
        }
        return acc
    }, {}) 
    
    console.log("+++ res", res)
    
        const res2 = arr.reduce((acc, curr) => {
        if (acc.has(curr.age)) {
            acc[curr.age]++
        }
        else {
            acc[curr.age] = 1;
        }
        return acc
    }, new Map()) 
    
    console.log("+++ res2", res2)
    
    console.log("+++ res", res)