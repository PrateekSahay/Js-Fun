

// Promise.all([Promise.resolve('1'), Promise.resolve('2')]).then(x => console.log(x));
// Promise.all([Promise.resolve('1'), Promise.resolve('2'), Promise.reject('4')]).then(x => console.log(x)).catch(x => console.log(x));

// const res = Promise.all([Promise.resolve('1'), Promise.resolve('2')])
// console.log(res);

Promise.myPromiseAll = (promises) => {

    return new Promise((resolve, reject) => {

        let result = [];

        promises.forEach((val, ind, arr) => {

            val.then( res => {
                result.push(res);
                if (ind === promises.length - 1) {
                    resolve(result);
                }
            }).catch((err) => reject(val))

        })

    })
}

Promise.myPromiseAll([Promise.resolve('1'), Promise.resolve('2')]).then(x => console.log(x)).catch(x => console.log(x));
Promise.myPromiseAll([Promise.resolve('1'), Promise.resolve('2'), Promise.reject('3')]).then(x => console.log(x)).catch(x => console.log(x));