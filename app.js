const express = require('express')
const path = require('path')

const app = express()

const PORT = process.env.PORT | 4000

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');


app.get('/', (req, res, next) => {
    console.log("req on home");
    res.render('home', {
        pageTitle: 'Sarthak Agarwal', path: '/'
    })
})

app.listen(PORT, () => {
    console.log(`App is running on Port=${PORT}`);
})
