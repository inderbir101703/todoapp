const express=require('express');
const port=8000;
const contact=require('./models/contact');
const db = require('./config/mongoose');
const app=express();
app.use(express.urlencoded());
app.use(express.static('assests'));
app.use('/',require('./routes/index'));
app.set('view engine','ejs');
app.set('views','./views');



app.post('/delete',function(req,res){
   contact.findByIdAndDelete(req.body.ID,function(err){
    if(err)
    {
      console.log("error in deleting the element");
      return;
    }
    return res.redirect('back');
  });

})





app.listen(port,function(err){
    if(err)
    {
      console.log(`there is a error while listening ${err}`);
      return;  
    }
    console.log(`connected to server at port ${port}`);
})