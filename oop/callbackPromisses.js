// Call back vs Promises 

// call backs

const operation = (numero1, numero2, callback) => {
    return callback(numero1, numero2)
}
// console.log(operation(1, 2, (a, b) => a + b))

//------------------------------------------------


// async call back that would return the result after the 500 milleseconds of the setTimeout()

const asynOperation = (numero1, numero2, callback) => {
    return setTimeout(() => {
        callback(numero1, numero2)
    }, 500)
}

// asynOperation(1, 2, (a, b) => {
//     console.log(a + b)
// }) 

//------------------------------------------------

const asyncStuffwithCallback = (numero1, numero2, callback) => {
    const result = numero1 + numero2
    return setTimeout(() => {
        callback(result)
    }, 500)
}

// asyncStuffwithCallback(1, 2, (result) => {
//     console.log(result)
// }) 


const asyncStuffPromisses = (numero1, numero2) => {
    const result = numero1 + numero2
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(result) 
        }, 500);
    })
}

asyncStuffPromisses(1, 3)
    .then(result => console.log(result))

const result = await asyncStuffPromisses(1, 4)
console.log(result)





