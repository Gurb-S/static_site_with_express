const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

router.get(`/:id`,(req,res)=>{
    const { id } = req.params;
    console.log(id)
    if(projects[id] && !isNaN(id)){
        const { project_name } = projects[id];
        const { description } = projects[id];
        const { technologies } = projects[id];
        const { live_link } = projects[id];
        const { github_link } = projects[id];
        const { img_urls } = projects[id]
        const templateData = {project_name, description, technologies,live_link,github_link,img_urls}
        res.render('project', templateData)
    }
    else{
        res.redirect('/page-not-found')
    }
})

module.exports = router; 