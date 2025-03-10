class product {
    constructor(name, price, brand) {
        this.name = name
        this.price = price
        this.brand = brand
    }

    details() {
        // console.log('This is Details!', this)
        console.log(`This is details of ${this.name}!`)
    }
}

const redmi = new product("Note 14", "40000", "Xiaomi");
const ios = new product("iPhone12", "60000", "Apple");

ios.details()
redmi.details()

console.log(redmi)
console.log(ios)