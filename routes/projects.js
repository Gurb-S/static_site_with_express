const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

router.get('/:id',(req,res)=>{
    const { id } = req.params;
    console.log(projects[id]);
    res.render('project', {id})
})

module.exports = router; 