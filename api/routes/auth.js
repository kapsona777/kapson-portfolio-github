var db = require('./connection');
var express = require('express');
var router = express.Router();  
const app = express();

const cors = require('cors');

app.use(cors({
    origin: '*',
}));

const whitelist = ['http://localhost:3000', 'http://localhost:9000'];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error())
    }
  }
}

app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.get('/ingredients', cors(), (req, res, next) => {
    res.send(ingredients);
});

router.post("/login",function(req,res,next){
    db.query(`SELECT * FROM users WHERE username='${req.body.username}' AND password='${req.body.password}'`,function(err,result){
        if(err) throw err;
        if(result.length==0){
            res.send("Invalid Username or Password");
        }
        else{
            res.send("Login Successful");
        }
    })
});

module.exports=router;