const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const router = require('./routes');


dotenv.config()

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());
app.use(express.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//app.use('/api/v1', router);

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    try {
        return res.status(200).json({
            success: true,
            message: 'Welcome to our todo platform!',
            author: 'Faithful Drizzle',
            website: 'use any website',
        });
        
    } catch (error) {
        console.log(error)
    }
});

app.use('/api/v1', router)


app.listen(port, () => {
    console.log(`Server started on port ${port}`);

    mongoose.connect(process.env.MONGODB_URL, {})
        .then(() => console.log('Connected to db'))
        .catch(err => console.error(err))  
})
    .on('error', (e) => {
        console.log('Server couldnt start', e)
    });
