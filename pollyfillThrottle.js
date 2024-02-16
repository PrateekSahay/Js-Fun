
function myThrottle (cb, delay) {

    let flag = true;
    return function() {
        if (flag) {
            cb.apply(this, arguments);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, delay);
        }
    }

}