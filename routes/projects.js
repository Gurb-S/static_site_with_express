const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

router.get(`/:id`,(req,res)=>{
    const { id } = req.params;
    //console.log(projects[id]);
    const { project_name } = projects[id];
    //console.log(project_name);
    const { description } = projects[id];
    //console.log(description)
    const { technologies } = projects[id];
    const { live_link } = projects[id];
    const { github_link } = projects[id];
    const { img_urls } = projects[id]
    console.log(technologies)
    const templateData = {project_name, description, technologies,live_link,github_link,img_urls}
    res.render('project', templateData)
})

module.exports = router; 