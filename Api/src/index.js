const express = require('express');
const cors = require('cors');



const app = express();
app.use(cors());

app.get('/',  (req, res) => {
    return res.send('Hello World');
});

module.exports = app;


