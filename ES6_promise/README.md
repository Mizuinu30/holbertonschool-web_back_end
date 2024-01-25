# ES6 Promises Learning!



# General Questions:




## Promises (how, why, and what)
Promises in ES6 are used to handle asynchronous operations in JavaScript. They are objects that represent the eventual completion or
failure of an asynchronous operation and its resulting value.

Here's a brief explanation:

1. **What**: A Promise is an object representing the eventual completion or failure of an asynchronous operation. It serves as a
placeholder for the eventual results of the operation.

2. **Why**: Promises are used to handle asynchronous operations like server requests, reading files, etc. They provide a way to handle
the results or errors from these operations in an asynchronous manner, improving code readability and error handling.

3. **How**: A Promise is created using the `Promise` constructor, which takes a function (the executor) with two parameters: `resolve`
and `reject`. The `resolve` function is called when the asynchronous task completes successfully and returns the results of the task,
while the `reject` function is called when the task fails, returning an error.

```javascript
let promise = new Promise(function(resolve, reject) {
  // asynchronous operation code

  if (/* operation successful */) {
    resolve(value); // value is the result of the operation
  } else {
    reject(error); // error is the reason for failure
  }
});

promise.then(
  function(value) { /* handle successful operation here */ },
  function(error) { /* handle error here */ }
);
```

The `then` method is used to specify callbacks to handle the results or errors from the Promise. It takes two arguments: a callback
for a successful Promise and a callback for a failed Promise.




## How to use the then, resolve, catch methods?
The `then`, `resolve`, and `catch` methods are used in the context of Promises in JavaScript.

1. **then**: The `then` method is used to schedule callbacks to be called when the Promise is fulfilled or rejected. The `then` method
returns a new Promise that can be further chained.

```javascript
promise.then(
  function(value) { /* fulfillment */ },
  function(reason) { /* rejection */ }
);
```

2. **resolve**: The `Promise.resolve` method returns a Promise object that is resolved with a given value. If the value is a promise,
that promise is returned; if the value is a thenable (i.e. has a "then" method), the returned promise will "follow" that thenable,
adopting its eventual state.

```javascript
let promise1 = Promise.resolve(value);
```

3. **catch**: The `catch` method is used when the Promise is rejected. It's a shorthand for `then(undefined, rejection)`. This method
also returns a new Promise that can be further chained.

```javascript
promise.catch(
  function(reason) { /* rejection */ }
);
```

Here's an example of how you might use these methods together:

```javascript
let promise = new Promise(function(resolve, reject) {
  // asynchronous operation code
  if (/* operation successful */) {
    resolve('Success!'); // value is the result of the operation
  } else {
    reject('Failure!'); // error is the reason for failure
  }
});

promise
  .then(value => console.log(value)) // logs "Success!" if the promise is resolved
  .catch(error => console.log(error)); // logs "Failure!" if the promise is rejected
```




## How to use every method of the Promise object?
The Promise object in JavaScript has several methods. Here's a brief overview of each:

1. **Promise.resolve(value)**: Returns a Promise object that is resolved with the given value. If the value is a promise, that promise
is returned; if the value is a thenable (i.e., has a "then" method), the returned promise will "follow" that thenable, adopting its
eventual state.

```javascript
let promise1 = Promise.resolve('Success!');
```

2. **Promise.reject(reason)**: Returns a Promise object that is rejected with the given reason.

```javascript
let promise2 = Promise.reject('Failure!');
```

3. **Promise.all(iterable)**: Returns a promise that resolves when all of the promises in the iterable argument have resolved, or
rejects with the reason of the first passed promise that rejects.

```javascript
let promise3 = Promise.all([promise1, promise2]);
```

4. **Promise.race(iterable)**: Returns a promise that fulfills or rejects as soon as one of the promises in the iterable fulfills or
rejects, with the value or reason from that promise.

```javascript
let promise4 = Promise.race([promise1, promise2]);
```

5. **Promise.allSettled(iterable)**: Returns a promise that resolves after all of the given promises have either fulfilled or
rejected, with an array of objects that each describes the outcome of each promise.

```javascript
let promise5 = Promise.allSettled([promise1, promise2]);
```

6. **Promise.any(iterable)**: Takes an iterable of Promise objects and, as soon as one of the promises in the iterable fulfills,
returns a single promise that resolves with the value from that promise. If no promises in the iterable fulfill (if all of the given
promises are rejected), then the returned promise is rejected with an AggregateError, a new subclass of Error that groups together
individual errors.

```javascript
let promise6 = Promise.any([promise1, promise2]);
```

Remember, the `then`, `catch`, and `finally` methods are used to handle the outcome of a Promise:

```javascript
promise1
  .then(value => console.log(value)) // logs "Success!" if the promise is resolved
  .catch(error => console.log(error)) // logs "Failure!" if the promise is rejected
  .finally(() => console.log('Done')); // logs "Done" when the promise is settled, regardless of its outcome
```




## In ES6 (and JavaScript in general), `throw`, `try`, and `catch` are used for exception handling.
1. **throw**: The `throw` statement allows you to create custom errors. Technically, you can throw an exception (throw an error). The
exception can be a string, a number, a boolean or an object.

```javascript
throw 'Error2';   // String type
throw 42;         // Number type
throw true;       // Boolean type
throw {toString: function() { return "I'm an object!"; } };
```

2. **try...catch**: The `try` statement allows you to define a block of code to be tested for errors while it is being executed. The
`catch` statement lets you handle the error. The `try` statement must have either a `catch` block or a `finally` block or both.

```javascript
try {
  // Block of code to try
  throw new Error('This is a custom error');
}
catch(err) {
  // Block of code to handle errors
  console.log(err.message); // logs "This is a custom error"
}
finally {
  // Block of code to be executed regardless of the try / catch result
  console.log('This will run no matter what');
}
```

The `catch` block can take an argument, which will be the error object that was thrown. This object has a `message` property that
contains the string passed to the `Error` constructor. The `finally` block will always be executed after the `try` and `catch` blocks,
regardless of whether an exception was thrown or caught.




## What is the await operator in ES6?
The `await` operator is used with Promises in JavaScript and can only be used inside an `async` function. The `await` expression
causes the `async` function to pause and wait for the Promise's resolution or rejection, and then to resume the execution of the
`async` function and return the resolved value.

Here's an example:

```javascript
async function myFunction() {
  try {
    const result = await someAsyncOperation();
    console.log(result); // This logs the resolved value of the promise
  } catch (error) {
    console.log(error); // This logs the error if the promise is rejected
  }
}
```

In this example, `someAsyncOperation()` is a function that returns a Promise. The `await` keyword before `someAsyncOperation()` makes
the `async` function wait until the Promise resolves and returns its value.

If the Promise is rejected, the `await` expression throws the rejected value, which can be caught with a `catch` block.

Remember, `await` can only be used inside an `async` function. If you try to use it outside of an `async` function, you'll get a
syntax error.




## How to use an async function?
An `async` function in JavaScript is a function that is marked with the keyword `async` and it can contain an `await` expression that
pauses the execution of the async function and waits for the passed Promise's resolution, then resumes the function's execution and
returns the resolved value.

Here's a basic example of how to declare and use an async function:

```javascript
// Declare async function
async function myAsyncFunction() {
  try {
    const result = await someAsyncOperation(); // someAsyncOperation is a function that returns a Promise
    console.log(result); // logs the resolved value of the promise
  } catch (error) {
    console.log(error); // logs the error if the promise is rejected
  }
}

// Use async function
myAsyncFunction();
```

In this example, `myAsyncFunction` is an async function that uses the `await` keyword to pause its execution until `someAsyncOperation
()` resolves. If `someAsyncOperation()` rejects, the error will be caught and logged to the console.

Remember, you can only use the `await` keyword inside an async function. If you try to use it outside of an async function, you'll get
a syntax error.