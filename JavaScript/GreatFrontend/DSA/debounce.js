// https://www.greatfrontend.com/interviews/study/gfe75/questions/javascript/debounce

// Debouncing is a technique used to control how many times we allow a function to be executed over time. When a JavaScript function is debounced with a wait time of X milliseconds, it must wait until after X milliseconds have elapsed since the debounced function was last called.

// You almost certainly have encountered debouncing in your daily lives before (e.g. when entering an elevator). Only after X duration of not pressing the "Door open" button (the debounced function not being called) will the elevator door actually close (the callback function is executed).

// Implement a debounce function which accepts a callback function and a wait duration. Calling debounce() returns a function which has debounced invocations of the callback function following the behavior described above.

// Example:

// let i = 0;
// function increment() {
//   i++;
// }
// const debouncedIncrement = debounce(increment, 100);

// t = 0: Call debouncedIncrement().
// debouncedIncrement(); // i = 0

// t = 50: i is still 0 because 100ms have not passed.
//  Call debouncedIncrement() again.
// debouncedIncrement(); // i = 0

// t = 100: i is still 0 because it has only
//  been 50ms since the last debouncedIncrement() at t = 50.

// t = 150: Because 100ms have passed since
//  the last debouncedIncrement() at t = 50,
//  increment was invoked and i is now 1 .

// Export the debounce function so it can be imported in other modules/files
export default function debounce(func, wait) {
  
    // Declare a variable to store the ID of the current timeout.
    // Used to cancel the previous scheduled function call.
    let timeoutId = null;
  
    // Return a new function (this is the debounced version of the original `func`)
    return function (...args) {
      // Clear the previous timeout if it exists.
      // This prevents the previously scheduled `func` from executing.
      clearTimeout(timeoutId);
  
      // Set a new timeout to call `func` after the specified `wait` time.
      timeoutId = setTimeout(() => {
        // Optional: Clear timeoutId (good for memory / clarity, not strictly necessary)
        timeoutId = null;
        
        // Call the original function `func` with the correct `this` context and passed arguments
        // `.apply(this, args)` ensures that `func` gets called like it normally would
        func.apply(this, args);
      }, wait); // Wait `wait` milliseconds before calling `func`
    };
  }
  