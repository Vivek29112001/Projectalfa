const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));
app.use(express.urlencoded());

var contactList = [
    {
        name:"Babita",
        phone:"9837193333"
    },
    {
        name:"Tony Stack",
        phone:"1234567890"
    },
    {
        name:"Vivek",
        phone:"7535838290"
    }

]


app.get('/', function(req,res){

    return res.render('home',{
        title:"Contacts List",
        contact_list: contactList
    });
});

app.get('/practice', function(req,res){
    return res.render('practice',{
        title:"Let us Play with ejs"
    });
});


app.post('/create-contact', function(req,res){
//    contactList.push({
//     name:req.body.name,
//     phone:req.body.phone
//    });
contactList.push(req.body);

return res.redirect('back');
});


app.listen(port, function (err) {
    if (err) {
        console.log("error in running in the server ", err);
    }
    console.log("Yup! Server is running in Port", port);

});