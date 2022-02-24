const express = require('express');


const app =express();

app.use(express.urlencoded({extended: false}));
app.use('/static', express.static('public'));
app.set('view engine', 'pug');

const mainRoutes = require('./routes/index');
app.use(mainRoutes);


app.listen(3000, () =>{
    console.log('The app is running on localhost:3000');
});
