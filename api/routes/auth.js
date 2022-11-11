var db = require('./connection');
var express = require('express');
var router = express.Router();  
var sha256 = require('sha256');
 

router.post("/",function(req,res,next){
    db.query(`SELECT * FROM users WHERE username='${req.body.username}'`,function(err,result){
        if(err) throw err;
        if(result.length==0){
            res.send("Person with this username is not registered");
        }else{
            if(result[0].password == req.body.password){ 
                db.query(`UPDATE users SET loggedin = 1 WHERE username = '${req.body.username}'`,function(err,result){
                    if(err) throw err; 
                    res.send("Login Successful");
                });
            }
            else{
                res.send("Wrong Password");
            }
        } 
    })
});

module.exports=router;