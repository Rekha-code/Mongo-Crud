const getdetails = require('./mongodb')

let deleterecord = async ()=>{
let collection = await getdetails()
let result = await collection.deleteOne({name:"Mee"})
console.log(result);
}
deleterecord()