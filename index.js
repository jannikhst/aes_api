const aes = require('aes-ecb');
const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 8080;
const router = express.Router();

app.use(express.json());
app.use(router);
app.use(cors());

router.post('/aes-ecb/encrypt', (req, res, next) => {
    const key = req.body.key;
    const content = req.body.content;
    const encrypted = aes.encrypt(key, content);
    const json = {};
    json.message = 'Success';
    json.result = encrypted;
    res.send(JSON.stringify(json));
});

router.post('/aes-ecb/decrypt', (req, res, next) => {
    const key = req.body.key;
    const content = req.body.content;
    const decrypted = aes.decrypt(key, content);
    const json = {};
    json.message = 'Success';
    json.result = decrypted;
    res.send(JSON.stringify(json));
});


app.listen(port, () => { console.log('started api') });