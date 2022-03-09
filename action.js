const express = require('express');
const router = express.Router();
router.get('/greeting',(req,res) => {
    return res.status(200).json({
        message:'welcome to my node.js API'
    });

});
module.exports = router;