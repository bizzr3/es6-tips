'use strict';

let fileSystem = require('fs');
let readStream = fileSystem.createReadStream(__dirname + '/files/TheAlienWowSignal.mp3');
let writeStream = fileSystem.createWriteStream(__dirname + '/tmp/stream.mp3')

readStream.on('data', (chunk) => {
    writeStream.write(chunk)
});
