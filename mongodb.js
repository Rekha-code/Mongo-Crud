const {MongoClient}=require('mongodb')
const url = 'mongodb://localhost:27017/'
const client = new MongoClient(url)

async function getdetails(){
let conn = await client.connect()
let db = conn.db('products')
return db.collection('prodInfo')
}
module.exports=getdetails