const person = {
    name: 'Karim',
    age: 23,
    'fav places' : ['Saint Martin', 'Sylhet', 'Chattogram'],
    details: {
        profession: 'Developer',
        salary: 30000,
        isMarried : false,
        father : {
            name : "Khondaker",
            age : 62
        }
    }
}

console.log(person.details.father.age) //Dot Notation
console.log(person["details"]['salary']); //Bracket Notation (More Powerful)
console.log(person['fav places']);



//Optional Chaining

// console.log(person.details.mother.age); ---> ERROR
console.log(person.details?.mother?.age) //Undefined