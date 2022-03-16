const express = require('express');
const router = express.Router();

let users = [];

router.post('/register',(req,res)=>{

    //const user_email = req.body.email;
    //const user_password = req.body.password;

    const {email,password} =req.body;

    users.push({email:email,password:password});

    return res.status(200).json({
        message: users
    });

})



router.get('/greeting',(req,res) => {
    return res.status(200).json({
        message:'welcome to my node.js API'
    });
});


module.exports = router;