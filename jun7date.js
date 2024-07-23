//7 jun morning friday

// 1
function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// 2
// sol (2)1
function reverseString(str) {
  return str.split("").reverse().join("");
}

// console.log(reverseString("hello"));

// sol (2)2

function reverseString(str) {
  let store = "";
  for (let i = str.length - 1; i >= 0; i--) {
    store += str[i];
  }
  return store;
}

// console.log(reverseString("hello"));

// 3

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const original = { a: 1, b: { c: 2 } };
const copy = deepCopy(original);
// console.log(copy);
// console.log(copy === original);

// 4

function fetchData() {
  return fetch("https://jsonplaceholder.typicode.com/posts/1").then(
    (response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    }
  );
}

fetchData()
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));


//   5

function delegate(container, selector, eventType, handler) {
    container.addEventListener(eventType, event => {
        if (event.target.matches(selector)) {
            handler(event);
        }
    });
}

// const container = document.getElementById('container');
// delegate(container, 'button', 'click', (event) => {
//     console.log(event.target.textContent);
// });

// 6

const curry = fn => (...args) =>
    args.length >= fn.length ? fn(...args) : curry(fn.bind(null, ...args));

const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);
// console.log(curriedAdd(2)(3)(4)); 

// 7

function debounce(fn, delay) {
    let timerId;
    return function() {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            fn.apply(this, arguments);
        }, delay);
    };
}

// const log = () => console.log('Logging...');
// const debouncedLog = debounce(log, 1000);
// debouncedLog(); 

// 8

const flatten =(arr)=>{
    return arr.flat(Infinity);
}

// console.log(flatten([1, [2, [3, [4]], 5]])); 

// 9

function createCounter() {
    let count = 0;
    return function() {
        return ++count;
    };
}

const counter = createCounter();
// console.log(counter()); 
// console.log(counter()); 
// console.log(counter()); 

// 10

const memoize =(fn)=> {
    const cache = new Map();
    return function(...args) {
        const key = JSON.stringify(args);
        if (!cache.has(key)) {
            cache.set(key, fn.apply(this, args));
        }
        return cache.get(key);
    };
}

const slowFn = (num) => {
    for (let i = 0; i < 1e9; i++) {} 
    return num * 2;
}

const memoizedFn = memoize(slowFn);
// console.log(memoizedFn(5)); 
// console.log(memoizedFn(5)); 




