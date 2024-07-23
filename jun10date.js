//10 jun morning monday

// learn about pub sub
// memoization
// async parallel execution

const memoize = (fn) => {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

const slowFunction = (num) => {
  console.log("Calculating...");
  return num * 2;
};

const memoizedFunction = memoize(slowFunction);

console.log(memoizedFunction(7));
console.log(memoizedFunction(7));
