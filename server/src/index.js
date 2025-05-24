const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

// TODO favicon
const FAFICON = path.join(__dirname,  '../../', 'client', 'public', 'favicon.ico');
const PORT = 3003;

app.get('/favicon.ico', (req, res) => {
    res.setHeader('Content-Type', 'image/x-icon');
    fs.createReadStream(FAFICON).pipe(res);
});

app.use(express.static(path.join(__dirname, '../../', 'client', 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../', 'client', 'build', '/index.html'));
});

console.log('server start');

app.listen(PORT, () => {
    console.log(`your app is listening to port ${PORT}`);
});
