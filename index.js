const express = require('express');
const app = express();

app.use(express.json());

app.post('/sort', (req, res) => {
    const { data } = req.body;

    if (!data || typeof data !== 'string') {
        return res.status(400).json({ error: 'Invalid input: "data" must be a string.' });
    }

    const sorted = data.split('').sort();
    return res.json({ word: sorted });
});

module.exports = app;
