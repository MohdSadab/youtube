const express = require("express");

const router = express.Router();

// /users/

router.get("/",(req,res)=>{
    res.json("Hello Router")
})

// /users/gsgsg
router.get("/:id",(req,res)=>{
    res.json({
        "params":req.params,
        "query":req.query
    });
})
module.exports=router;