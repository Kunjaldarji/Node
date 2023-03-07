
// -------------------------------------------------------------- Synchronous Code Exampl e----------------------------------------------------------

// console.log(" I ");

// console.log(" eat ");

// console.log(" Ice Cream ");


// ------------------------------------------------------------------- Asynchronous code example -----------------------------------------------------------------

// console.log("I");

// setTimeout(() => {
//     console.log("eat");                   // This will be shown after 2 seconds
// }, 2000)

// console.log("Ice Cream")



// ---------------------------------------------------------------------------- Callback Format -------------------------------------------------------------------

// let stocks = {
//     Fruits : ["strawberry", "grapes", "banana", "apple"],
//     liquid : ["water", "ice"],
//     holder : ["cone", "cup", "stick"],
//     toppings : ["chocolate", "peanuts"],
//  };

// let order = (call_production) => {

//     console.log("Order placed. Please call production")


//     call_production();
// };
// let production = () => {

//     setTimeout(() => {
//         console.log("production has started")
//         setTimeout(() => {
//             console.log("The fruit has been chopped")
//             setTimeout(() => {
//                 console.log("Water and Ice add")                     //CallBack Hell
//                 setTimeout(() => {
//                     console.log("start the machine")
//                     setTimeout(() => {
//                         console.log("Select Container")
//                         setTimeout(() => {
//                             console.log("Select Topping")
//                             setTimeout(() => {
//                                 console.log("serve Ice cream")
//                             }, 2000)
//                         }, 3000)
//                     }, 2000)
//                 }, 1000)
//             }, 1000)
//         }, 2000)
//     }, 1000)

// };
// order(production)

// ------------------------------------------------------------------- PROMISE -----------------------------------------------------------------

// Promise Syntax

// new Promise(()=>{})

// Promise {
//     <pending>,
//         [Symbol (async_id_symbol)] : 245,
//         [Symbol (trigger_async_id_symbol)] : 5,
//         [Symbol (destroyed)] : {destroyed : false}
// }


// let Promise = new Promise((resolve, reject) => { })

// console.log(typeof Promise)
// console.log(typeof new Promise((res, rej) => { }))

// let stocks = {
//     Fruits: ["strawberry", "grapes", "banana", "apple"],
//     liquid: ["water", "ice"],
//     holder: ["cone", "cup", "stick"],
//     toppings: ["chocolate", "peanuts"],
// };


// let is_shop_open = true;
// let order = (time, work) => {
//     return new Promise((resolve, reject) => {
//         if (is_shop_open) {
//             setTimeout(() => {
//                 resolve(work())
//             }, time)
//         }
//         else {
//             reject(console.log(" Our shop is closed "))
//         }
//     })
// }
// order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
//     .then(() => {
//         return order(0000, () => console.log('production has started'))
//     })
//     .then(() => {
//         return order(2000, () => console.log("Fruit has been chopped"))
//     })
//     .then(() => {
//         return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
//     })
//     .then(() => {
//         return order(1000, () => console.log("start the machine"))
//     })
//     .then(() => {
//         return order(2000, () => console.log(`ice cream placed on ${stocks.holder[1]}`))
//     })
//     .then(() => {
//         return order(3000, () => console.log(`${stocks.toppings[0]} as toppings`))
//     })
//     .then(() => {
//         return order(2000, () => console.log("Serve Ice Cream"))
//     })
