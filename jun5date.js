//5 jun morning wednesday

//1.
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
// console.log(counter())
// console.log(counter())

// above solution concept of closures (remember previous value)

// 2

function personFactory(name) {
  let _name = name;
  return {
    getName: function () {
      return _name;
    },
    setName: function (newName) {
      _name = newName;
    },
    greet: function () {
      return `Hello, ${_name}!`;
    },
  };
}

// const person = personFactory('Alice');
// console.log(person.getName());
// console.log(person.greet());
// person.setName('Bob');
// console.log(person.getName());
// console.log(person.greet());

// 3

//3.Question: Modify the code to also handle the rejection case, logging "Promise rejected!" if the promise is rejected.

const myPromise = new Promise((resolve, reject) => {
  if (!true) {
    setTimeout(() => {
      resolve("Promise resolved!");
    }, 2000);
  } else {
    reject(" not === Promise resolved!");
  }
});

myPromise
  .then((message) => {
    // console.log(message);
  })
  .catch((err) => {
    // console.log(err);
  });

//   4

function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve(`Data from ${url}`);
      } else {
        reject(`Failed to fetch data from ${url}`);
      }
    }, 1000);
  });
}

fetchData("https://example.com")
  .then((data) => {
    // console.log(data);
    return fetchData("https://example.com/page2");
  })
  .then((data) => {
    // console.log(data);
  })
  .catch((error) => {
    // console.log('Error:', error);
  });

// 5

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function delayedMessage() {
  await delay(1000);
  // console.log('This message is delayed by 1 second');

  await delay(2000);
  // console.log('2 sec later calll this func');
}

delayedMessage();

// 6
// solution 1
async function fetchData1(url) {
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data)
}

fetchData1("https://jsonplaceholder.typicode.com/todos/1").catch((err) => {
  // console.log(err,"errrrrrrr")
});
// solution 2

async function fetchData1(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    // console.log(data,"11");
  } catch (error) {
    // console.error('Error fetching data:', error);
  }
}

fetchData1("https://jsonplaceholder.typicode.com/todos/1");

// 7

function* simpleGenerator() {
  yield 1 ** 2;
  yield 2 ** 2;
  yield 3 ** 2;
}

const gen = simpleGenerator();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

// 8

function* idGenerator(initialValue) {
  let id = initialValue;
  while (true) {
    yield id++;
  }
}

const gen1 = idGenerator(4);
// console.log(gen1.next().value);
// console.log(gen1.next().value);
// console.log(gen1.next().value);

// 9

function fetchData2(url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Data from ${url}`);
        }, 1000);
    });
}

function* dataFetcher() {
    // console.log(yield fetchData2('https://example.com'));
    // console.log(yield fetchData2('https://example.com/page2'));
}

function run(generator) {
    const iterator = generator();

    function iterate(iteration) {
        if (iteration.done) {
            return Promise.resolve(iteration.value);
        }
        const promise = iteration.value;
        return promise.then(res => iterate(iterator.next(res)))
            .catch(err => iterator.throw(err));
    }

    return iterate(iterator.next());
}

run(dataFetcher);

// 10

const createAsyncCounter =() => {
    let count = 0;
    return async function () {
        await new Promise(resolve => setTimeout(resolve, 1000));
        count++;
        if (count === 5) {
            count = 0; 
        }
        return count;
    };
}

const asyncCounter = createAsyncCounter();
// asyncCounter().then(console.log);
// asyncCounter().then(console.log); 
// asyncCounter().then(console.log); 
// asyncCounter().then(console.log); 
// asyncCounter().then(console.log); 
// asyncCounter().then(console.log); 
// asyncCounter().then(console.log); 

