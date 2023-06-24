const express = require('express');
const app = express();
const PORT = 4000;

app.get('/chat-on', (req, res) =>
{
    res.send('hello world');
});

app.listen(PORT, () => {
    console.log(`This server is listening on port ${PORT}`)
});