const express = require('express')

const app = express()

const PORT = process.env.PORT | 4000

app.set('view engine', 'ejs')


app.get('/', (req, res, next) => {
    res.render('index')
})

app.listen(PORT, () => {
    console.log(`App is running on Port=${PORT}`);
})
