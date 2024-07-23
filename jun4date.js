// 4 jun morning tuesday

// Promises

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Success!');
//     }, 2000);
//   });
  
//   myPromise.then((message) => {
//     console.log(message); // "Success!" after 2 seconds
//   }).catch((error) => {
//     console.log(error);
//   });
  

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log('Error:', error);
//   });

// Closure

// function createCounter() {
//     let count = 0; 
  
//     return function() {
//       count++;
//       return count;
//     };
//   }
  
//   const counter = createCounter();
//   console.log(counter()); 
//   console.log(counter()); 
//   console.log(counter()); 

// function createPerson(name) {
//     let age = 0; 
  
//     return {
//       getName: function() {
//         return name;
//       },
//       getAge: function() {
//         return age;
//       },
//       incrementAge: function() {
//         age++;
//       }
//     };
//   }
  
//   const person = createPerson('Alice');
//   console.log(person.getName()); 
//   console.log(person.getAge()); 
//   person.incrementAge();
//   console.log(person.getAge()); 
  
  
// How to write clean code. Research about this topic and write it down 

// 4 jun afternoon tuesday

// Async await 

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   async function greet() {
//     console.log('Hello');
//     await delay(1000); 
//     console.log('World!');
//   }
  
//   greet();


//   async function fetchData() {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error('Fetch error:', error);
//     }
//   }
  
//   fetchData();
  
// function fetchUserData() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve({ userId: 1, username: 'JohnDoe' });
//       }, 1000);
//     });
//   }
  
//   function fetchPostsByUser(userId) {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve(['Post 1', 'Post 2']);
//       }, 1000);
//     });
//   }
  
//   async function getUserPosts() {
//     try {
//       const user = await fetchUserData();
//       console.log('User:', user);
  
//       const posts = await fetchPostsByUser(user.userId);
//       console.log('Posts:', posts);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }
  
//   getUserPosts();
 
// generators 

// function* numberGenerator() {
//     yield 1;
//     yield 2;
//     yield 3;
//   }
  
//   const generator = numberGenerator();
  
//   console.log(generator.next().value); 
//   console.log(generator.next().value); 
//   console.log(generator.next().value); 
//   console.log(generator.next().value); 
  

// function* colorGenerator() {
//     yield 'red';
//     yield 'green';
//     yield 'blue';
//   }
  
//   for (const color of colorGenerator()) {
//     console.log(color);
//   }
