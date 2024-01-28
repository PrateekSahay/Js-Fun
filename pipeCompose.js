function addByTwo (x) {
    return x+2;
}

function substractByOne (x) {
    return x-1;
}

function multiplyByFour (x) {
    return x*4;
}

const myPipe = (...fns) => (input) => fns.reduce((ip, fn) => fn(ip), input);

const myCompose = (...fns) => (input) => fns.reduceRight((ip, fn) => fn(ip), input);

console.log(myPipe(addByTwo, substractByOne, multiplyByFour)(3));

console.log(myCompose(addByTwo, substractByOne, multiplyByFour)(3));