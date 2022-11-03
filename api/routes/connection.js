var express = require('express');
var router = express.Router();
var mysql=require('mysql'); 

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: "blockproject"
});

router.get("/",function(req,res,next){
    conn.connect(function(err){
        if(err) throw err;
        conn.query("SELECT * FROM users", function(err,result,fields){
            if(err) throw err;
            var result = JSON.stringify(result);
            res.send(result);
        })
    })
})


module.exports=router;