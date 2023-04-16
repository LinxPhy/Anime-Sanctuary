
const express = require('express');
const cors = require('cors');
const Images = require('./image')

const app = express();

app.use(express.json())


app.use(function(req, res, next) {
    res.setHeader("Content-Type", "application/json");
    next();
});


app.use(
    cors({
        origin: "https://anime-sanctuary.netlify.app",
        methods: ["GET", "POST"]
    })
)


app.get('/api', (req, res) => {

    const page = parseInt(req.query.page) || 1
    const limit = 100

    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    const results = Images.slice(startIndex, endIndex)

    res.send(results)
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})