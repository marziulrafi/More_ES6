class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    sleep() {
        console.log(`${this.name} sleep at 1am!`);
    }
}

const Karim = new Person ("Marziul", 23)
console.log(Karim)
Karim.sleep()

const KM = new Person ("Rafi", 23)
KM.sleep()