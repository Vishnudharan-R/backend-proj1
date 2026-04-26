// const asyncHandler = () => {}

export { asyncHandler}

//higher order function is a function that takes another function as an argument and 
// returns a new function that wraps the original function 
// in a try-catch block to handle any errors that may occur during the execution of the original function. 
// This is useful for handling errors in asynchronous functions, such as those that interact with a database or make API calls,
//  without having to write repetitive try-catch blocks in each function.

//here we use promises to handle the asynchronous code instead of using async-await and try-catch block.
const asyncHandler = (requestHandler) => {
    // 1. we create a standard express function (req, res, next)
    return (req, res, next) => {
        //Sometimes a developer might forget to make a function async. 
        // By using Promise.resolve(), the code says: "I don't care if you are a normal function or an async function; 
        // I'm going to treat you like a Promise so I can use .catch() on you just in case."


        // 2. this executes our logic, but wrap it in a promise.resolve()
        // this ensures that even if the code is not a "promise", it will be treated as a promise and we can catch any errors that may occur during its execution.
        Promise.resolve(requestHandler(req, res, next))

        // 3. the buzzer check
        // if the promise "rejects"(i.e. if an error occurs), .catch() triggers
        // it then sends the error to express's global error handler using next(error)
        .catch((error) => next(error))
    }

}

//below is a implementation that uses try catch block

// const asyncHandler = (func) => {async ()=> {}}// This is a higher order function that takes a function as an argument 
// // and returns a new function that wraps the original function in a try-catch block to handle any errors that may occur during the execution of the original function.


// // a wrapper function that can be used to wrap any asynchronous function and handle errors in a consistent way across the application.
// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)

//     }catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message || "internal server error"
//         })
//     }

// }

// Request hits the route.

// asyncHandler wraps your controller.

// the Internal try-catch waits for your code to run.

// If it fails, it automatically sends a Standardized JSON Response.