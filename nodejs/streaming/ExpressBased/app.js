'use strict';

const express = require('express');
const app = express();
const server = require('http').createServer(app);

const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(process.env.PWD + '/views/index.html'));
});

app.get('/stream', (req, res) => {
    res.sendFile(path.join(__dirname + '/resources/media/the_mask_singer_3.mp3'));
});

server.listen(8090);
