function time() {
    for (var i = 0; i < 5; i++) {
        function log (i) {
        setTimeout(function() {
            console.log(i);
        }, i*1000)
    }
    log(i);
    }
}

time();

function time1() {
    for (let i = 0; i < 5; i++) {
        setTimeout(function() {
            console.log(i);
        }, i*1000)
    }
}

time1();