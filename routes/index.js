const express=require('express');
const router=express.Router();
const controller=require('../controllers/home_controller');
const controller2=require('../controllers/add_work_controller');
router.get('/',controller.home);
router.post('/add_work',controller2.addwork);
module.exports=router;