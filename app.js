const express= require('express')
const bodyParser = require('body-parser')
const req = require('request')
const moment = require('moment')
console.log(moment().format('ddd , ha'));

const app = express();

app.set('view engine','ejs');

app.use( bodyParser.urlencoded({extended:false}))
app.use( bodyParser.json());

app.use(function(req, res, next){
    // next is a function
    next();
   // res.send('sorry site is under maintance plz visit after one hour')
    
})

//app.use(express.static(__dirname+'/public'))

app.get('/con',function(req,res){
    console.log('hello customers');
})

app.get('/hello',function(req,res){
    res.send({
        name : 'Nagarjuna',
        age: 22
    })
})

app.get('/atpTemperature', (nagReq, nagRes) => {
       
req({url: 'http://localhost:3001/temperature', 
 json: true}, 
 function(abcReq, abcRes, body)
 {
    nagRes.send(abcRes.body)

 })
})
app.get('/',function(req,res){
    console.log(res );
})

app.get('/home',function(req,res){
    res.sendfile(__dirname+'/template/home.html')
})

app.get('/aboutus',function(req,res){
    res.sendfile(__dirname+'/template/aboutus.html')
})

app.get('/student',function(req,res){
    res.render('student',{name:'nagarjuna',age:22})
})


app.listen(3000,function(){
    console.log('our server is live on port 3000');
}) 