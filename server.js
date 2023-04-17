
const express = require('express');
const cors = require('cors');
const mime = require('mime');
const Images = require('./image')
const path = require('path')
const admin = require('firebase-admin');
const { initializeApp } = require("firebase/app");
const { getStorage } = require("firebase/storage");
const serviceAccount = require("./serviceAccount.json");
const app = express();

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "anime-sanctuary-bb873.appspot.com"
});

// const firebaseApp = initializeApp(firebaseConfig);
// const storage = getStorage(firebaseApp);

app.use(express.json())
app.use(express.static(path.join(__dirname, 'src')))


app.use(
    cors({
        // origin: 'anime-sanctuary.infinityfreeapp.com',
        origin: "https://anime-sanctuary.netlify.app",
        // origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    })
)


app.get('/api', async(req, res) => {

    const page = parseInt(req.query.page) || 1
    const limit = 5

    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    const results = Images.slice(startIndex, endIndex)

    res.setHeader('Content-Type', 'application/javascript');
    res.send(results)

    // const bucket = admin.storage().bucket();
    // const [files] = await bucket.getFiles();

    // const images = files.map(file => {
    //     return {
    //         id: file.id,
    //         url: `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURIComponent(file.name)}?alt=media`
    //     }
    // })

    // res.send(Images)
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})