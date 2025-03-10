class Person {
    #status; //Private
    constructor(name, age, status) {
        this.name = name
        this.age = age
        this.#status = status
    }

    sleep() {
        console.log(`${this.name} sleep at 1am!`);
    }
    action () {
        console.log(this.#status);
    }
}

const Karim = new Person ("Marziul", 23, "Unmarried")
console.log(Karim.status); //Undefined

Karim.action() //Unmarried
