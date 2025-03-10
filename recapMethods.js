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

const newProducts = products.map(p=> {
    if (p.brand==='apple') {
        p.price = p.price + 3000
    }
    return p
})
// console.log(newProducts)



// products.forEach(p=>console.log(p))
products.forEach(p=> {
    if (p.brand==='samsung') {
        // console.log(p)
    }
})


const singleProduct = products.find(p=>p.id===2);
console.log(singleProduct)

const newProducts2 = products.filter(p=>p.brand==='apple');
console.log(newProducts2)