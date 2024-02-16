
const myDebounce = function (cb, delay) {    
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            cb.apply(this, arguments);
        }, delay)        
    }
}