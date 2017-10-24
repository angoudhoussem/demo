var express= require('express');
var mysql= require('mysql');
var path= require('path');
var cors= require('cors');
var users = require('./router/user');
var app= express();


app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', __dirname + '/views');
var connection = mysql.createConnection({
  host     : '127.0.0.1:8889',
  user     : 'root',
  password : 'root',
  database : 'demo',
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... oui");    
} else {
    console.log("Error connecting database ... nn");    
}
});

app.use("/user",users);


app.get("/all",function(req,res) {

  /* var response=[{

   	    nom : "Angoud",
   	    prenom : "Houssem "
   },
   {

   	    nom : "Angoud",
   	    prenom : "Bassem "
   }
   ,{

   	    nom : "Angoud",
   	    prenom : "Ysssine "
   }];
      
      res.send(JSON.stringify(response));
*/

  
   var sql ='SELECT * from Client';

connection.query(sql, function(err, rows) {
  if (!err) {
    console.log('The solution is: ', rows);
res.send(rows); 
//res.send(JSON.stringify(response));


 } else {
    console.log('Error while performing Query.');
}
    
 
 });     
 



});




app.get("/",function(req,res){




    res.sendFile(__dirname+"/index.html");

});



app.get("/table",function(req,res){


   ///  res.sendFile(__dirname+"/table.html");

});



app.get("/objt",function(req,res){

   var sql ="SELECT * from Client WHERE nom='"+req.query.nom+"'";
   
connection.query(sql, function(err, rows) {
  if (!err) {
    console.log('The solution is: ', rows);
res.send(rows); 
//res.send(JSON.stringify(response));


 } else {
    console.log('Error while performing Query.');
}
    
 
 });     
 

});

app.get("/remove",function(req,res){




   var sql ="DELETE FROM `CLIENT` WHERE id="+req.query.id;

    console.log(sql);

connection.query(sql, function(err, rows) {
  if (!err) {
   // console.log('The solution is: ', rows);
res.send(rows); 
//res.send(JSON.stringify(response));


 } else {
    console.log('Error while performing Query.');
}
    
 
 });     
 

});


 





app.get("/add",function(req,res){

 
    var sql ="INSERT INTO `CLIENT`(`ADRESSE`, `EMAIL`, `LATITUDE`, `LONGITUDE`, `NOM`, `PASSWORD`, `PRÉNOM`) VALUES ('"+req.query.adresse+"','"+req.query.email+"',"+req.query.lat+","+req.query.lng+",'"+req.query.nom+"','"+req.query.pwd+"','"+req.query.prenom+"')";

  // var sql ="SELECT * from Client WHERE nom='"+req.query.nom+"'";
   
connection.query(sql, function(err, rows) {
  if (!err) {
    console.log('The solution is: ', rows);
res.send(rows); 
//res.send(JSON.stringify(response));


 } else {
    console.log('Error while performing Query.');
}
    
 
 });     
 

}); 


app.get("/update",function(req,res){

 
    var sql ="UPDATE `CLIENT` SET `ADRESSE`='"+req.query.adresse+"',`EMAIL`='"+req.query.email+"',`NOM`='"+req.query.nom+"',`PASSWORD`='"+req.query.pwd+"',`PRÉNOM`='"+req.query.prenom+"' WHERE id="+req.query.id;

  // var sql ="SELECT * from Client WHERE nom='"+req.query.nom+"'";
   
connection.query(sql, function(err, rows) {
  if (!err) {
    console.log('The solution is: ', rows);
res.send(rows); 
//res.send(JSON.stringify(response));


 } else {
    console.log('Error while performing Query.');
}
    
 
 });     
 

});







   console.log("my server url : locahost:3000");
   app.listen(3000);
