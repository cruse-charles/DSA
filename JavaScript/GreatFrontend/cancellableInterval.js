// https://www.greatfrontend.com/questions/javascript/cancellable-interval?list=async-operations

// Implement a function setCancellableInterval, that acts like setInterval but instead of returning a timer ID, it returns a function that when called, 
// cancels the interval. The setCancellableInterval function should have the exact same signature as setInterval:

// Ex 1
// let i = 0;
// // t = 0:
// const cancel = setCancellableInterval(() => {
//   i++;
// }, 10);
// // t = 10: i is 1
// // t = 20: i is 2
// cancel(); // Called at t = 25
// // t = 30: i is still 2 because cancel() was called and the interval callback has stopped running.


export default function setCancellableInterval(callback, delay, ...args) {
    const fn = setInterval(callback, delay, ...args)
  
    return () => {
      clearInterval(fn)
    }
    
}