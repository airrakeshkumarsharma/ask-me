const express = require('express');

const sttController = require('../controllers/tts/tts');
const downloadController = require('../controllers/tts/donload');

const router = express.Router();

/* Define Routes */
router.post('/tts', sttController['v1']);
router.get('/download', downloadController['v1']);

/* Export */
module.exports = router;
