const express = require('express');


const app = express();

app.use(express.urlencoded({extended: false}));
app.use('/static', express.static('public'));
app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const aboutRuote = require('./routes/about')
const projectRoute = require('./routes/projects');

app.use(mainRoutes);
app.use(aboutRuote);
app.use('/projects',projectRoute)


app.use((req,res,next) =>{
    console.log('404 error handler called')
    res.status(404).render('page-not-found')
})

app.use((err,req,res,next)=>{
    if(err){
        console.log('Global error handler called', err)
    }
    if(err.status === 404){
        res.status(404).render('page-not-found',{err})
    }
    else{
        err.message = err.message || "Something went wrong";
        res.status(err.status || 500).render('error', { err });
    }
})

app.listen(3000, () =>{
    console.log('The app is running on localhost:3000');
});

