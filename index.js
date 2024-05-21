const {MongoClient}=require('mongodb')
const url = 'mongodb://localhost:27017/'
const client = new MongoClient(url)

async function getdetails(){
let conn = await client.connect()
let db = conn.db('products')
let collection = db.collection('prodInfo')
let result = await collection.find().toArray()
console.log(result);
}
getdetails()