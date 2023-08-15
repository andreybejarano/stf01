const path = require('path');

const utils = require('./src/utils');
const files = require('./src/files');

files.setContentFile(path.resolve(__dirname, 'logs.txt'), `Este es un log.\n`);
const logs = files.getContentFile(path.resolve(__dirname, 'logs.txt'));


console.log(logs);
