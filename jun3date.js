// 3 jun morning

// Classes 
// JSON Object methods 
// Webstorage apis

// 3 june afternoon 

// 1.Create a Person class with properties name and age. 
// Include a method introduce that prints a message introducing the person.

// solutions 1 

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   introduce() {
//     console.log(`${this.name} and  ${this.age}`);
//   }
// }

// const person1 = new Person('jay', 20);
// person1.introduce(); 

// const person2 = new Person('ajay', 21);
// person2.introduce();

// solutions 2

// 2 .Create a JavaScript object representing a book with properties title, author, and year. 
// Convert this object to a JSON string and then parse it back to an object.


// const book = {
//   title: "title one",
//   author: "author one",
//   year: 2024
// };

// const converttojsonString = JSON.stringify(book);
// console.log(converttojsonString);
// const converttoparsed = JSON.parse(converttojsonString);
// console.log(converttoparsed);

// 3.Use the localStorage API to store a user's name and then retrieve it.
//  If the name is not stored, prompt the user to enter their name.

// Function to retrieve the user's name from localStorage
// const storeLocal=()=> {
//   let name = localStorage.getItem('username');
//   if (!name) {
//     name = prompt(" enter name:");
//     localStorage.setItem('username', name);
//   }
//   return name;
// }


// const name = storeLocal();
// console.log("Watch ----" + name);

//4 .Create a User class that includes methods to save the user's data (name and age) to localStorage,
//  retrieve it, and print it. The data should be stored in JSON format.

// solutions 4
// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   save() {
//     const userData = {
//       name: this.name,
//       age: this.age
//     };
//     localStorage.setItem('user', JSON.stringify(userData));
//   }

//   static retrieve() {
//     const userData = JSON.parse(localStorage.getItem('user'));
//     return userData ? new User(userData.name, userData.age) : null;
//   }

//   print() {
//     console.log(`Name: ${this.name}, Age: ${this.age}`);
//   }
// }

// const user = new User('jay', 21);
// user.save();

// const retrievedUser = User.retrieve();
// if (retrievedUser) {
//   retrievedUser.print();
// } else {
//   console.log("No---fund localStorage.");
















