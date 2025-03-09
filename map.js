const numbers = [1,2,3,4,5]

// const newArray = numbers.map(value=>value+1)
// console.log(newArray)


const square = numbers.map(abc=>abc*abc)
console.log(square);



const players = ["Messi", "Neymar", "Suarez"]
const playersArr = players.map((x,index) => {
    console.log(index,x)
})