const products = [
    {
        id:1, name: "iphone7", color: "white", price:30000, brand:"apple"
    },
    {
        id:2, name: "s22", color: "gold", price:50000, brand:"samsung"
    },
    {
        id:3, name: "redmi", color: "red", price:10000, brand:"xiaomi"
    },
    {
        id:4, name: "iphone13", color: "black", price:70000, brand:"apple"
    }
];


//ForEach
products.forEach(product => {
    // console.log(product);
    if (product.color === 'black') {
        // console.log(product)
    }
})



//Filter
const newProducts = products.filter(abc => abc.price > 20000);
// console.log(newProducts)

newMobile = products.filter(p=>p.id != 3);
console.log(newMobile);



//Find
const mobile = products.find(x=>x.id===3);
// console.log(mobile)