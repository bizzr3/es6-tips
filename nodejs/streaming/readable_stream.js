'use strict';

let fileSystem = require('fs');
let readStream = fileSystem.createReadStream(__dirname + '/files/TheAlienWowSignal.mp3');

readStream.on('data', (chunk) => {
    console.log(chunk);
});
