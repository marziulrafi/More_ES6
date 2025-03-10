class Vehicle {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
    move () {
        console.log("I can move!")
    }
}

class Bus extends Vehicle {
    constructor (name, price, seat) {
        super(name,price);
        this.seat = seat
    }
    route () {
        console.log("Dhaka to Feni")
    }
}

class Truck extends Vehicle {
    constructor (name, price, load) {
        super(name,price);
        this.load = load
    }
    route () {
        console.log("Jashore to Chandpur")
    }
}

const GreenLine = new Bus("Green Line", 15000000, 50)
console.log(GreenLine)
GreenLine.move()