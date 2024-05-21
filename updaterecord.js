const getdetails = require('./mongodb')

let updaterecord = async ()=>{
let collection = await getdetails()
let result = await collection.updateOne({name:"Apple"},{$set:{price:45000,Qty:9}})
console.log(result);
}
updaterecord()