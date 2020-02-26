const express = require('express');
const path = require('path');
const body = require('body-parser');
const app = express();
const mysql = require('mysql');

app.use(body());
app.use(express.static(path.resolve(__dirname, '..', 'build')));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'vBHZ7vMytCUF4W',
    database: 'reactsql'
});
// show data
app.get('/data', function(req,res){
    let sql = 'SELECT * FROM users';
    db.query(sql, (err, result)=>{
        if(err) throw err;
         console.log(result);
         res.json(result);
    });
});

//delete
app.put('/delete', function(req, res) {
    var sql = 'DELETE FROM users WHERE userid = ?';
    db.query(sql,[req.body.idkey],function (error, results) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});

//edit
app.put('/data', function(req, res) {
    var sql = 'UPDATE users SET firstname= ? , lastname = ? , villageID = ? , villageName = ? , Subdistrict = ? , District = ? , Province = ? , zipcode = ? WHERE userid = ?';
    db.query(sql,[req.body.firstname,req.body.lastname,req.body.villageID,req.body.villageName,req.body.Subdistrict,req.body.District,req.body.Province,req.body.zipcode,req.body.idkey],function (error, results) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});

//insert
app.post('/data', function(req, res){
    console.log(req.body);
    let data = {
        userid:req.body.idkey,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        villageID:req.body.villageID,
        villageName:req.body.villageName,
        Subdistrict:req.body.Subdistrict,
        District:req.body.District,
        Province:req.body.Province,
        zipcode:req.body.zipcode
    };
    let sql = 'INSERT INTO users SET ?';
    db.query(sql, data, (err, result)=>{
        if(err) throw err;
        console.log(result);
    });
});


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
