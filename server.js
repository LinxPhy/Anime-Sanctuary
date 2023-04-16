
const express = require('express');
const cors = require('cors');
const mime = require('mime');
const Images = require('./image')
const path = require('path')

const app = express();

app.use(express.json())

app.use(express.static(path.join(__dirname, 'src')))


app.use(
    cors({
        origin: "https://anime-sanctuary.netlify.app",
        // origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    })
)

// app.use(express.static('public', {
//     setHeaders: (res, path) => {
//       if (mime.getType(path) === 'application/javascript') {
//         res.type('application/javascript');
//       }
//     }
//   }));

app.get('/api', (req, res) => {

    const page = parseInt(req.query.page) || 1
    const limit = 100

    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    const results = Images.slice(startIndex, endIndex)

    res.setHeader('Content-Type', 'application/javascript');
    res.send(results)
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})