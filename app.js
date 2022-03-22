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

app.listen(3000, () =>{
    console.log('The app is running on localhost:3000');
});
