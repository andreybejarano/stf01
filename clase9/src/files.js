const fs = require('fs');

function getContentFile(filePath) {
    const file = fs.readFileSync(filePath, 'utf-8');
    return file;
}

function setContentFile(filePath, data) {
    fs.appendFileSync(filePath, data);
}

module.exports = { 
    getContentFile: getContentFile, 
    setContentFile: setContentFile 
};