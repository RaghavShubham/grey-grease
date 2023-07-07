// let and const are also hoisted but differently from var

// console.log(a); //Throws reference error, cannot access before initialization
// console.log(b);

// When the program is loaded, in the first go(memory allocation phase) let and const are allocated memories
// and are stored in a separate memory space which can't be accessed before initialization, this time between the
// memory allocation and the initialization of the variable with a value is called the Temporal Dead Zone.

let a = 10; // this is where the Temporal Dead zone ends for the variable a.
console.log(a); // prints 10

var b = 100; //During memory allocation phase this is appended to the global object ('window') and is initialized with the value 'undefined'
//and can be accessed before this line also but it will give the value undefined and not an error.
