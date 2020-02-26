const express = require('express');
const path = require('path');
const body = require('body-parser');
const app = express();

app.use(body());
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// app.get('/api', (req,res) => {
//   // var list = ["item1", "item2", "item3"];
//   // res.json(list);
//   let list = [
//       {name:"mike",fname:"pitiwat",lname:"promnimit",age:21},
//       {name:"mee",fname:"tipsukon",lname:"promnimit",age:21}
//     ];
//   res.json(list);
//   console.log(list);
// });

// app.get('/api', (req,res) => {
//     // var list = ["item1", "item2", "item3"];
//     // res.json(list);
//     let list = [
//         {name:"mike",fname:"pitiwat",lname:"promnimit",age:21},
//         {name:"mee",fname:"tipsukon",lname:"promnimit",age:21}
//     ];
//     res.json(list);
//     console.log(list);
// });

app.post('/data',(req,res)=>{
    console.log(req.body);
    let data ={
        firstname:req.body.firstname,
        lastname:req.body.lastname
    }
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});


