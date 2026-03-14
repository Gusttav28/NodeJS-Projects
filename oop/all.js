// Core fundamentals
// Start with closures, scope, and var/let/const. These come up in literally every JS interview. Write a closure-based counter from scratch, then experiment with var inside a for loop vs let to see the hoisting difference. After that, move to this — understand how it changes between regular functions, arrow functions, and classes, and practice call(), bind(), and apply().


var hola = "h"  // -> global scope and can be able to be re-declared. All this when a variable with 'var' is declared inside any '{}'
let hello = "c" // -> block scope can be re-declared
const bonjuour = "x" // -> block scope cannot be re-declared


// -> global scope and can be able to be re-declared
function test(sayhi) {
    var hola = sayhi
    console.log(hola)
}
var hola = "hhho"
console.log(hola)



// -> block scope cannot be re-declared
function test2(sayhi){
    console.log(hello)
    hello = sayhi
    console.log(hello)
}
hello = "test"
console.log(hello)


// -> block scope cannot be re-declared
function test3(sayhi) {
    // bonjuour = sayhi -> this would show up a TypeError: Assignment to constant variable.
    const bonjuour2 = sayhi
    console.log(bonjuour2)
}

test3("hello")

let a = 2
// let a = 3 ❌ this would be a syntax error, with let or const a variable cannot be declared
if (a === 1){
    var howAreu = "how are they?"
}
howAreu = "how are u"
howAreu = "how are uii"
var x = 0
var x = 1 //but with var yes, you are avaialable to re-declared a variable.

console.log(howAreu, x)

function arrr(arr) {
    let count = 0
    count = 1
    for(let i = 0; i < arr.length; i++){
        count += 1
        console.log(count)
    }
    return 'Final count: ' + count
}

console.log(arrr([1, 2, 3, 4]))