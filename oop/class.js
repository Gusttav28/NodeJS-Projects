import promptSync from 'prompt-sync';

// Normal development with clases.
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year
    }
    get info(){
        console.log(this.brand + ' ' + this.model + ' from ' +  this.year)
    }
}

function carGeneration(brand, model, year){
    const creatingCars = new Car(brand, model, year)
    creatingCars.info

}

carGeneration('For', 'Raptor', 2025)
////////////////////////////////////////////////


// Clases with methods and states.
class BankAccount {
    constructor(owner, balance){
        this.owner = owner
        this.balance = balance
    }
    deposit(amount){
        return this.balance = amount
    }
    withdrow(amount){
        return this.balance = this.balance - amount
    }
}

var input = promptSync()

function InternationalBank(user, password) {
    if (user == 'Gus' && password == 1111) {
        const checkAccount = new BankAccount('Gustavo', 0)
        console.log("Currently account: ", checkAccount)
        const deposit = Number(input("How much you want to deposit: "))
        console.log("Depositating the amount of: ", deposit + '...')
        setTimeout(() => {
            checkAccount.deposit(deposit)   
            console.log("Balance update: ",  checkAccount)
        }, 2000)
        setTimeout(()=>{
            const withdrow = input("How much do you want to withdrow?: ")
            checkAccount.withdrow(withdrow)
            console.log("Withdrowing the amount of: ", withdrow + '...')
            console.log("Balance update: ", checkAccount)
        }, 2000)

    } else{
        console.log('Sign in unrecognize')
    }

}
const user = input("Give me your user name: ")
const passwod = Number(input("Now give me your password: "))
InternationalBank(user, passwod)

////////////////////////////////////////////////


// normal class with a private paramtter

class User{
    #password = 121212
    constructor(password){
        if (this.#password === password){
            this.#password = password
            console.log("welcome back")
        }
    }
    
    checkPassword(){
        console.log(`This is you currently passwod: ${this.#password}`)
    }
    passwordChanged(oldPassword, newPassword){
        if(this.#password === oldPassword){
            this.#password = newPassword
            console.log(this.#password)
            console.log("password update")
        } else{
            console.log("password is incorrect")
        }
    }
}

function userLogin() {
    const userLogin = Number(input("Give me your password: "))
    
    const passwordChanged = new User(userLogin)
    passwordChanged.checkPassword()
    const userOldPassword = Number(input("Give me your old password: "))
    const userNewPassword = Number(input("Give me your new password: "))
    passwordChanged.passwordChanged(userOldPassword, userNewPassword)
    passwordChanged.checkPassword()
}

userLogin()

////////////////////////////////////////////////



// class Inheritance
class Animal{
    constructor(animal){
        this.animal = animal
    }

    makesound(){
        return `The ${this.animal} is making it sounds right now...`
    }
}

class Dog extends Animal{
    constructor(animal){
        super(animal)
    }

    makesound(){
        return `${this.animal} that is a Dog is barking`
    }
    eating(){
        return `${this.animal} that is a Dog is eating righ now...`
    }

}

class Cat extends Dog{
    makesound(){
        super.makesound()
        return `${this.animal} that is a cat is meowing`
    }

    eating(){
        super.eating()
        return `${this.animal} that is a cat is eating...`
    }
}

function animals(){
    const animal = new Animal('Dog')
    const dog = new Dog('Brandy')
    const cat = new Cat('Filos')
    console.log(animal.makesound())
    console.log(dog.makesound())
    console.log(dog.eating())
    console.log(cat.makesound())
    console.log(cat.eating())
}
animals()
////////////////////////////////////////////////



// class polymorphism
class Shape{
    constructor(x, y){
        this.x = x
        this.y = y
    }

    get area(){
        return this.x, this.y
    }
}

class Rectangle extends Shape{
    constructor(x, y){
        super(x, y)
    }
    get area(){
        return this.x * this.y
    }
}

class Circlee extends Shape{
    constructor(x) {
        super(x)
    }
    get area(){
        return 3.14159 * this.x ** 2
    }
}

const circleCalculation = new Circlee(4)
console.log(`Circle: ${circleCalculation.area} cm^2`)
const rectangleCalculation = new Rectangle(16, 100)
console.log(`Reactangle: ${rectangleCalculation.area} in^2`)
//////////////////////////////////////////////////////////////////


// Mini project
class EcommerceStore{
    constructor(products, totalPrice, carItems){
        this.products = products
        this.carItems = carItems
        this.totalPrice = totalPrice
    }
    productts(items){
        this.products = [items]
        return this.products
    }
    get allProducts(){
        return this.products
    }

    addItemsCar(itemId){
        if (itemId in this.products){
            this.carItems = [this.products[itemId].product_name]
            return this.carItems
        } else{
            console.log("This products are not in the list")
        }
    }

    listItemsCar(){
        return this.carItems
        
    }

    itemCarTotalPrice(){
        this.totalPrice = 0
        for (let i in this.products){
            this.totalPrice = this.products[i].price + this.totalPrice
        }
        return this.totalPrice
    }
 
}

function StoreEcommerce() {
    const products = [
        {
            id:1,
            product_name: "rolex",
            price:2000
        },
        {
            id:2,
            product_name: "T-shirt",
            price:3000
        },
        {
            id:3,
            product_name: "Shoes",
            price:3000
        },
    ]
    
    const community = new EcommerceStore(products)
    
    console.log(community.allProducts)
    console.log(community.addItemsCar(0))
    console.log(community.addItemsCar(1))
    console.log(community.addItemsCar(2))
    console.log(community.listItemsCar())
    console.log(`This is the total of the your car $${community.itemCarTotalPrice()}`)    
}

StoreEcommerce()

