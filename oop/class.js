import promptSync from 'prompt-sync';


class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year
    }
    getInfo(){
        return this.brand, this.model, this.year
    }
}

 

function carGeneration(brand, model, year){
    const carList = []
    const creatingCars = new Car(brand, model, year)
    carList.push(creatingCars.getInfo)
    console.log("List of cars: ", carList)

}

// const readline = require('readline')
// const rl = readline.createInterface({
//     input: process.stdin,
//     output:process.stdout
// })

// rl.question('car info', (name) => {
//     console.log(name)
// })

const input = promptSync()
const brand = input("Car Brand Name: ")
const model = input("Model Name: ")
const year = input("Year: ")
carGeneration(brand, model, year)


