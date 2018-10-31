const fs = require('fs');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/cat-images', function (req, res) {
    let params = req.query;
    let files = fs.readdirSync('cats');
    let currentLocation = 0;

    if (params.currentImage !== "noImageDefined") {
        for (let index = 0; index < files.length; index++) {
            const element = files[index];
            if (element.split('.')[0] !== params.currentImage) continue;
            currentLocation = index;
            break;
        }
    } else {
        res.status(200).send({path: '/backend/cats/' + files[0], name: files[0].split('.')[0]});
        return;
    }

    if (params.action === "next") {
        currentLocation++;

        if (files.length <= currentLocation) {
            currentLocation = 0;
        }

        res.status(200).send({path: '/backend/cats/' + files[currentLocation], name: files[currentLocation].split('.')[0]});    
        return;
    }

    if (params.action === "previous") {
        currentLocation--;

        if (files.length <= currentLocation) {
            currentLocation = files.length - 1;
        }

        res.status(200).send({path: '/backend/cats/' + files[currentLocation], name: files[currentLocation].split('.')[0]});    
        return;
    }
});

app.listen(3000, function () {
    console.log('Started cat website backend.');
});