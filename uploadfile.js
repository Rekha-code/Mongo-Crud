// const express = require(,express)
// const multer = require('multer')

// const app = express()
// const upload= multer({
//   storage:multer.diskStorage({
//     destination:function(req,file,cb)
//   },
//   filename:function(req,file,cb)
//   {
//         cb(null,file.fieldname+'_'+Date.now()+'.jpg')
//       })
// }).single('file1')

// app.post('/upload',upload,(req,res)=>{
//   res.send("File Upload Successfully")
// })
// // const upload= multer.diskStorage({
// //   destination:function(req,file,cb){
// //     cb(null,'images')
// //   },
// //   filename:function(req,file,cb){
// //     cb(null,file.fieldname+'_'+Date.now()+'.jpg')
// //   }
// // }).single('file1')

// // app.post('/upload',upload,(req,res)=>{
// //   res.send("File Upload Successfully")
// // })

// app.listen(4000)