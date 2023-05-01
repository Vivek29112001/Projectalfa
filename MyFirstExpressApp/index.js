const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));


app.get('/', function(req,res){

    return res.render('home',{title:"I am Flying"});
});
app.get('/practice', function(req,res){
    return res.render('practice',{
        title:"Let us Play with ejs"
    });
});


app.listen(port, function (err) {
    if (err) {
        console.log("error in running in the server ", err);
    }
    console.log("Yup! Server is running in Port", port);

});