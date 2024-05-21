const express = require('express')
const mongodb = require('mongodb')
const getdetails = require('./mongodb')
const app = express()

app.use(express.json())

app.get('/',async(req,res)=>{
let collection = await getdetails()
let result = await collection.find().toArray()
res.send(result)
})

app.post('/',async(req,res)=>{
  let data = await getdetails()
  let result =  await data.insertOne(req.body)
  console.log(result);
  res.send(result)
})

app.put('/',async(req,res)=>{
  let data = await getdetails()
  let result = await data.updateOne({name:req.params.name},{$set:req.body})
  console.log(result);
  res.send(result)
})

app.delete('/:id',async(req,res)=>{
let data = await getdetails()
let result = await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
console.log(result);
res.send(result)
})
app.listen(4000)