const contact=require('../models/contact');
module.exports.home=function(req,res){
    contact.find({}, function(err, contact){
        if(err){
            console.log("error in fetching contacts from db");
            return;
        }
        return res.render('home',{
            title: "Todo App ",
            contact_list: contact
        })
        return res.redirect('back');
        ;
        console.log("hola");

    });
}