'use strict';

const http = require('node:http');
const path = require('node:path');
const fs = require('node:fs');

const server = http.createServer((req, res) => {
    const { url } = req;

    if (url.endsWith('.png') || url.endsWith('.jpg')) {
        const filePath = path.join(__dirname, url);
        const contentType = url.endsWith('.png') ? 'image/png' : 'image/jpeg';

        fs.access(filePath, fs.constants.F_OK, (err) => {
            if (err) {
                res.writeHead(404);
                res.end();
            } else {
                res.setHeader('Content-Type', contentType);
                fs.createReadStream(filePath).pipe(res);
            }
        });
    } else {
        res.writeHead(404);
        res.end();
    }
});

const port = 9999;
server.listen(port);