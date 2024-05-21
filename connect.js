const getdetails = require('./mongodb')

let display = async ()=>{
let collection = await getdetails()
let result = await collection.find().toArray()
console.log(result);
}
display()