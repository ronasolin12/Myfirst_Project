const express = require('express');
const router = express.Router();
const bcryptjs =require('bcryptjs');

let users = []

router.post('/register',async(req,res)=>{

    const {email,password} =req.body;

    const account = users.find(x=>x.email==email);
    if(account)
    {
        return res.status(200).json({
            message: 'User exist please try othe email'
         });
    }
    else{

        const hash_password = await bcryptjs.hash(password,10);

        users.push({email:email,password:hash_password});
        return res.status(200).json({
            message:'Account created',
            users_count:users.length,
            data:users
             });
        }
})

router.get('/greeting',(req,res) => {
    return res.status(200).json({
        message:'welcome to my node.js API'
    });
});


module.exports = router;