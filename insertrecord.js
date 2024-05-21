const getdetails = require('./mongodb')

let insertnew = async ()=>{
let collection = await getdetails()
let result = await collection.insertMany([
  {
      name:"Lenevo Laptop",
      price:45000,
      store:"Lenevo",
      Qty:3
  },
  {
    name:"Dell Laptop",
    price:58000,
    store:"Dell",
    Qty:2
  },
  {
    name:"HP Laptop",
    price:41000,
    store:"HP",
    Qty:5
  }
])
console.log(result);
}
insertnew()