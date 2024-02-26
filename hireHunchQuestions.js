// Note
// 1. Use React.something instead of importing from React.
// 2. Use ReactDOM.render(<SomeComponent />, document.getElementById('app'))
// 3. Container id is 'app'.
// 4. console.log('opens in actual browser dev tools!').


const useDebounce = ({input, delay}) => {
    const [debouncedValue, setDebouncedValue] = useState(input);

    // function debounce (func, delay) {
    //     let timer;
    //     return function () {
    //         clearTimeout(timer);
    //         timer = setTimeout(() => {
    //             func();
    //         }, delay)
    //     }
    // }

    const debounce = (input, delay) => {
        let timer;        
        clearTimeout(timer);
        setTimeout(() => {
            setDebouncedValue(input)
        }, delay)
    }

    useEffect(() => {
        debounce()
    }, [input, delay])

    return (
        debouncedValue
    )
   
}



const App = () => {
const [count, setCount] = React.useState(0);

console.log(count); //0,1

useEffect(()=> {
    setCount(prev=>prev+1);
},[])

useEffect(()=> {
    console.log(count); //0

setTimeout(()=> {
    console.log(count); //0
},100)
},[])

const fun = debounce(fn, delay);
fun()

const debouncedValue = useDebounce(input, 1000)

React.useEffect(() => {
  console.log(count);
}, [count])

const increaseCount = () => {
    setCount(prevState => prevState + 1)
}
const decreaseCount = () => {
    setCount(prevState => prevState - 1)
}

return (
    <div>
        <h1>Hello from React</h1>
        <h2> {count} </h2>
        <button onClick={increaseCount}>+1</button> &nbsp;
        <button onClick={decreaseCount}>-1</button>
        <h3>Start editing to see magic happen!</h3>
    </div>
);
};

ReactDOM.render(<App />, document.getElementById('app')); 


// Previous Code  
// // //javascript 
// // console.log('Hello World');
// 
// 
// function func(num1, num2, num3) {
//     return num1+num2+num3;
// }
// 
// 
// // const onced = once(func);
// 
// // onced(1) 
// 
// // onced(2) 
// 
// function once(fn) {
//     let result = 0;
//     return function (...data) {
//         if (result == 0) {
//             const res = fn(...data);
//             result = res;
//             return result;
//         }
//         else {
//             return result;
//         }        
//     }
// }
// 
// const onced = once(func);
// 
// console.log(onced(1,1,1));
// console.log(onced(2,2,2));
// 
// 
// 
// detectType
// 
// detectType(1) -> Number
// detectType([]) -> array
// detectType(new Map()) -> map
// 
// console.log(typeof 1);
// console.log(typeof 'ste');
// console.log(typeof []);
// console.log(typeof new Map());
// console.log(typeof new Set());
// 
// const map = new Map();
// 
// const setData = new Set();
// 
// console.log(map);
// console.log(map);
// 
// 
// map.set("asd1", 2)
// console.log(map.entries());
// const x = {a: '1'}
// console.log(x.entries());
// 
// console.log(obj.__proto__.constructor.name);
// 
// CSRF token
// 
// function detectType (data) {
//     if (typeof data === 'number') {
//         return "Number";
//     }
//     else if (typeof data === 'string') {
//         return "String";
//     }
//     else {
//         return data.__proto__.constructor.name;
//     }
// }
// 
// console.log(detectType(1))
// console.log(detectType('str'))
// console.log(detectType([]))
// console.log(detectType(new Set ()))
// console.log(detectType(new Map ()))
